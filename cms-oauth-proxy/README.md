# BidSentra CMS OAuth Proxy

This folder contains a Cloudflare Worker OAuth bridge for Decap CMS on GitHub Pages.

## What this solves

Decap CMS on GitHub Pages cannot log in directly to GitHub with `backend: github` on a static site. It needs an OAuth proxy between the CMS panel and GitHub.

## Before you deploy

1. Create a GitHub OAuth App.
2. Create or use a Cloudflare account.
3. Decide whether you want:
   - a default `workers.dev` URL, or
   - your own custom subdomain.

## GitHub OAuth App values

Use the future Worker URL as:

- Homepage URL: your proxy URL
- Authorization callback URL: `YOUR_PROXY_URL/callback`

Example:

- Homepage URL: `https://bidsentra-decap-proxy.your-account.workers.dev`
- Callback URL: `https://bidsentra-decap-proxy.your-account.workers.dev/callback`

## Deploy

1. Copy `wrangler.toml.example` to `wrangler.toml`
2. In `cms-oauth-proxy/`, run:
   - `npm install`
   - `npx wrangler login`
   - `npx wrangler secret put GITHUB_OAUTH_ID`
   - `npx wrangler secret put GITHUB_OAUTH_SECRET`
   - `npm run deploy`

## Wire Decap CMS to the proxy

After deployment, update `public/admin/config.yml` under `backend:` with:

```yml
base_url: https://YOUR_PROXY_URL
auth_endpoint: auth
```

For example:

```yml
backend:
  name: github
  repo: bjd1988/bidsentra-landing
  branch: main
  base_url: https://bidsentra-decap-proxy.your-account.workers.dev
  auth_endpoint: auth
```

Then redeploy the site.
