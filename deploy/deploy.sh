#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

DEPLOY_HOST="${DEPLOY_HOST:-2.29.178.86}"
DEPLOY_USER="${DEPLOY_USER:-deploy}"
DEPLOY_PATH="${DEPLOY_PATH:-/srv/yanabourne/main}"

# SSH private key path: first CLI argument, or DEPLOY_SSH_KEY env var (never commit keys).
SSH_KEY="${1:-${DEPLOY_SSH_KEY:-}}"
if [[ -z "${SSH_KEY}" ]]; then
  echo "Usage: DEPLOY_SSH_KEY=/path/to/key deploy/deploy.sh" >&2
  echo "   or: deploy/deploy.sh /path/to/key" >&2
  exit 1
fi
if [[ ! -f "${SSH_KEY}" ]]; then
  echo "SSH key not found: ${SSH_KEY}" >&2
  exit 1
fi

if [[ -n "${NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY:-}" ]]; then
  export NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
else
  echo "Warning: NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is unset; contact form will not work until set at build time." >&2
fi

echo "Building static site..."
pnpm install --frozen-lockfile 2>/dev/null || pnpm install
pnpm build

if [[ ! -d out ]]; then
  echo "Expected Next.js export directory 'out/' after build." >&2
  exit 1
fi

RSYNC_SSH=(ssh -i "${SSH_KEY}" -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new)

echo "Syncing out/ -> ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/"
rsync -avz --delete \
  -e "${RSYNC_SSH[*]}" \
  out/ \
  "${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/"

echo "Deploy complete."