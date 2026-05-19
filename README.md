# TIME Internet Promo & Referral Assistance Malaysia

Static Astro blog and referral assistance website for TIME Internet Malaysia-related SEO content.

This is an independent referral assistance page. It is not the official TIME website, and it must not store private API keys, customer data, Zoho login credentials, or other secrets.

## Local Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

The static output is generated in `dist/`.

## Cloudflare Pages Deployment

Use these Cloudflare Pages settings:

- Framework preset: `Astro`
- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: latest LTS

## Zoho Form Embed

The homepage includes this placeholder in `src/pages/index.astro`:

```html
<!-- PASTE ZOHO FORM IFRAME HERE -->
```

Paste the public Zoho Form iframe there when it is ready. Do not commit Zoho account credentials, private API keys, customer exports, or sensitive lead data.
