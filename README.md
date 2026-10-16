# Lizzie Embroiders

A lightweight, responsive single-page website for Lizzie Embroiders, a custom embroidery shop based in Connecticut.

## Hosting

Configured for **Cloudflare Workers Static Assets**, with no backend, build step, or framework. Cloudflare serves everything in `public/`.

- Repository: `CalebMalcarne/lizzie_embroiders`
- Worker name: `lizzie-embroiders`
- Deploy command: `npx wrangler deploy`
- Root directory: repository root
- Build command: none required

### Connect GitHub to Cloudflare

1. In Cloudflare, open **Workers & Pages** > **Create** > **Import a repository** (Workers).
2. Authorize GitHub if needed, and choose `CalebMalcarne/lizzie_embroiders` and branch `main`.
3. Choose a Worker named `lizzie-embroiders`; ensure the project root is `/` and deployment command is `npx wrangler deploy`.
4. Deploy, inspect the temporary `.workers.dev` address, then add your domain in the Worker's **Settings > Domains & Routes** as a **Custom Domain**.
5. Future pushes to `main` should trigger deployments when the Cloudflare Workers Git integration is enabled.

### Run locally

```bash
npx wrangler dev
```

## Google Form — required before taking orders

Open `public/script.js`, find **`GOOGLE_FORM_EMBED_URL`**, and paste the **published Embed HTML URL** from Google Forms (*Send/Publish > Embed*). It normally looks like `https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true`. Save and push. The website will show an email-order fallback until the embed is configured.

**Important:** Google Forms file-upload questions require customers to sign into a Google account, even when embedded. Consider a separate email artwork option for those customers.

## Updating products and prices

Edit `public/index.html` to update product descriptions, indicative starting prices, policy text, approved blank garment styles, and supplier links. All prices are indicative until Lizzie approves each individual quote.

Products currently linked for reference, not as a claim that stock is already purchased or available:
- Gildan 18000 crewneck sweatshirt — official manufacturer style page
- Gildan 5000 classic T-shirt — official manufacturer style page
- Liberty Bags 8866 canvas tote — official manufacturer style page

## Other notes

- Inquiry-only site. No customer payments or sensitive payment data are collected by this website.
- Replace decorative product illustrations with **real photographs of Lizzie's work** when ready.
- Verify the website's wording, production policies, order process, and advertised prices before going live.
- This is only the website; orders are handled by the external Google Form or email.
