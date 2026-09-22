# Dallas New Roof

Independent Dallas–Fort Worth roof replacement decision resource. The repository builds dependency-free static HTML into `public/` using `npm run build` and checks page links, metadata and generated files using `npm test`.

The site publishes no fabricated local averages, contractor rankings, testimonials, insurance outcomes or partner counts. The calculator creates a project brief and can summarize **quotes entered by the visitor**; it does not invent a dollar estimate. The company index is a comparison guide until verified profiles exist.

## Lead delivery setup

`api/lead.js` accepts quote requests only when `LEAD_WEBHOOK_URL`, `LEAD_OPERATOR_NAME`, `PRIVACY_CONTACT_EMAIL`, `LEAD_RECEIVER_NAME`, and `LEAD_RETENTION_DAYS` are configured in Vercel for both build and runtime. The URL must point to a trusted HTTPS receiver that can handle personal data and acknowledges delivery with 2xx. Set `LEAD_WEBHOOK_TOKEN` if your receiver expects a Bearer token. The interface clearly reports an unavailable service if delivery is not configured; it never shows a false success. There is no contractor matchmaking or CRM/closed-job attribution until an actual partner process is installed and documented.

Before production acquisition: verify the receiving entity and contact details, publish a specific controller/contact address in the privacy policy, sign any required processor agreement, establish retention and deletion procedures, verify partner coverage and referral disclosures, test one real consented lead end-to-end, and confirm domain deployment. Do not publish unverified contractor or cost data.

## Local preview

```
npm run build
python3 -m http.server 8080 -d public
```

## Editorial expansion

`scripts/content.mjs` contains individually written launch pages. Additional URL ideas from the brief are deliberately held until each can be supported by original research and a useful distinct answer. See `ROADMAP.md`.
