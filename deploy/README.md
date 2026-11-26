# Deploy (Hetzner + Caddy)

This site is a **static export** (`out/`). The [photography](https://photography.yanabourne.com) repo owns the Caddyfile; apply snippets below there for `yanabourne.com`.

## Deploy from this repo

```bash
export NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY="your-key"
export DEPLOY_SSH_KEY="$HOME/.ssh/yanabourne_deploy"
./deploy/deploy.sh
```

Override host/path with `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_PATH` if needed.

## Suggested Caddy snippets

### Site root

```caddy
yanabourne.com {
    root * /srv/yanabourne/main
    file_server

    # Server-side locale redirect (closer to old Accept-Language middleware; tweak as you like).
    @root path /
    redir @root /en 302

    # Static HTML + 404 (Next export: no trailing slash on routes like /en/portfolio/foo).
    try_files {path} {path}.html {path}/index.html /404.html

    header {
        X-Content-Type-Options nosniff
        Referrer-Policy strict-origin-when-cross-origin
    }
    @static path /_next/* /images/* /favicon/*
    header @static Cache-Control "public, max-age=31536000, immutable"
}
```

If you prefer the built root `index.html` (client redirect + EN/RU links), omit the `@root` `redir` and rely on `try_files` serving `index.html` for `/`.

Next export uses **no trailing slash** on app routes. Avoid global trailing-slash redirects that would duplicate URLs.

### Contact form

Submissions go to **Web3Forms** (`https://api.web3forms.com/submit`) from the browser. No Caddy config required unless you add a CSP; allow `connect-src https://api.web3forms.com`.