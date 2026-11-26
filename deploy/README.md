# Deploy (Hetzner + Caddy)

This site is a **static export** (`out/`). The [photography](https://photography.yanabourne.com) repo owns the Caddyfile; apply snippets below there for `yanabourne.com`.

## Deploy from this repo

```bash
export DEPLOY_SSH_KEY="$HOME/.ssh/yanabourne_deploy"
./deploy/deploy.sh
```

Override host/path with `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_PATH` if needed.

## Suggested Caddy snippets

### Site root

```caddy
yanabourne.com {
    root * /srv/yanabourne/main

    # Contact API (handler lives outside this repo — reverse_proxy to your service).
    handle /api/contact {
        reverse_proxy 127.0.0.1:8080
    }

    handle {
        file_server

        # Server-side locale redirect (closer to old Accept-Language middleware; tweak as you like).
        @root path /
        redir @root /en 302

        # Static HTML + 404 (Next export: no trailing slash on routes like /en/portfolio/foo).
        try_files {path} {path}.html {path}/index.html /404.html
    }

    header {
        X-Content-Type-Options nosniff
        Referrer-Policy strict-origin-when-cross-origin
    }
    @static path /_next/* /_next-static-images/* /images/* /favicon/*
    header @static Cache-Control "public, max-age=31536000, immutable"
}
```

If you prefer the built root `index.html` (client redirect + EN/RU links), omit the `@root` `redir` and rely on `try_files` serving `index.html` for `/`.

Next export uses **no trailing slash** on app routes. Avoid global trailing-slash redirects that would duplicate URLs.

### Contact form

The static site `POST`s JSON to same-origin `/api/contact`. The handler must:

- Accept `Content-Type: application/json`
- Return `200` with `{"ok":true}` on success; anything else is treated as failure
- Receive body fields: `site`, `lang`, `name`, `email`, `phone` (optional; form sends `""` today), `message`, `page`, `website` (honeypot; should be empty)