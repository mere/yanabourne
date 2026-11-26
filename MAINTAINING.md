# Maintaining yanabourne.com (static)

Content lives in git. There is no CMS or Stackbit: edit JSON (and any MDX under `content/`), commit, build, and deploy.

## Content layout

| What | Where |
|------|--------|
| Home copy (about, story) | `content/data/{en,ru}/home.json` |
| Hero, locations, certificates, portfolio section blurbs | `content/data/{en,ru}/*-section.json` |
| Portfolio detail pages | `content/data/{en,ru}/portfolioItems.json` |
| Footer | `content/data/{en,ru}/footer-section.json` |
| Contact copy | `content/data/{en,ru}/contact-section.json` |
| Images | `public/images/` |

Keep **en** and **ru** files in sync structurally; only text (and localized images if needed) should differ.

## Edit text

1. Open the relevant JSON under `content/data/en/` or `content/data/ru/`.
2. Change string fields (titles, paragraphs, labels).
3. Run `pnpm dev` and visit `http://localhost:3000/en` or `/ru`.

## Add a portfolio item

1. Add images under `public/images/portfolio/`.
2. In **both** `content/data/en/portfolioItems.json` and `content/data/ru/portfolioItems.json`, add an object to `items`:
   - `slug` (URL segment, e.g. `my-new-case`)
   - `title`, `description`, `image`, `images` (array)
3. Add a nav link in `components/ui/header.tsx` and `components/ui/mobile-menu.tsx` if it should appear in the Portfolio menu (optional).
4. Rebuild; static paths are generated from JSON via `generateStaticParams`.

## Swap images

1. Replace or add files in `public/images/`.
2. Update `src` paths in JSON if filenames change (use **lowercase** filenames; Linux hosting is case-sensitive).
3. Run `pnpm verify-images` if you only changed JSON/paths.
4. Rebuild and deploy (`prebuild` regenerates WebP variants at 640/1080/1920px).

## Add a new locale

1. Copy `content/data/en/` to `content/data/<code>/`.
2. Extend `Lang` in `app/[lang]/page.tsx` and `generateStaticParams` in `app/[lang]/layout.tsx` and `app/[lang]/page.tsx`.
3. Update `LanguageSelector` and `components/utils/link.tsx` if needed.

## Contact form

Uses [Web3Forms](https://web3forms.com) in the browser (`components/yana/contact.tsx`).

1. Create an access key at Web3Forms.
2. Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` when building (see `.env.example`).
3. Submissions are delivered to the email configured in Web3Forms.

The key is embedded in the static JS bundle at build time (standard for client-side forms).

## Build locally

```bash
pnpm install
export NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY="your-key"
pnpm build
```

Open static output:

```bash
npx serve out
```

## Deploy

See `deploy/README.md` and run `./deploy/deploy.sh` with `DEPLOY_SSH_KEY` or a key path argument.