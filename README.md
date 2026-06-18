# Premium Woods LLC — Site Rebuild

Custom counter & casework shop in Lincoln, NE — new SEO-focused Next.js site, replacing the legacy Wix template at premiumwoodsllc.com.

## Stack
- Next.js 16 (static export — `output: "export"`)
- Tailwind v4
- Hosted on Cloudflare Pages

## Run locally
```
npm install
npm run dev
```

## Deploy to Cloudflare Pages
```
npm run deploy
```

Runs a clean build (`rm -rf .next out`) then `wrangler pages deploy out`.
