# yanabourne.com

Static marketing site for Dr. Yana Bourne — Next.js App Router with `output: 'export'`, bilingual content (`/en`, `/ru`), and JSON-driven sections under `content/data/`.

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000/en](http://localhost:3000/en).

## Build & deploy

```bash
pnpm build   # writes static files to out/
./deploy/deploy.sh
```

See [MAINTAINING.md](./MAINTAINING.md) for content editing and [deploy/README.md](./deploy/README.md) for rsync + Caddy notes.