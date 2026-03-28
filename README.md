# BidSentra

## Deploy targets

The project supports two static-export targets:

- `npm run build:github-pages` for GitHub Pages with the repository base path
- `npm run build:seohost` for a regular hosting account such as SeoHost

Both commands generate a static site in the `out/` directory.

## SeoHost deployment

1. Run `npm run build:seohost`
2. Upload the contents of `out/` to the document root on SeoHost
3. If the domain should answer under both `bidsentra.pl` and `www.bidsentra.pl`, configure the redirect in SeoHost
4. Keep the contact form worker online, because the form submits to `https://bidsentra-contact-form.145884.workers.dev`

If SeoHost serves the page directly from the domain root, no extra base path configuration is needed.
