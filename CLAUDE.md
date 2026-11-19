# CLAUDE.md — skerjanc.org manual

Website of **HyperWare Solutions, Nejc Škerjanc, s.p.** (software engineering, Kranj, Slovenia).
Read this before changing anything.

## Basics

- Plain static site: HTML + CSS + vanilla JS. **No build step, no npm, no framework.**
- Hosted on **GitHub Pages** from `main` of `github.com/nejc-skerjanc/skerjanc.org`.
  **Deploy = `git push origin main`** (live within ~1–2 min). `CNAME` holds the domain — never delete it.
- `.nojekyll` disables Jekyll — keep it.
- Canonical URL is `https://skerjanc.org/` (no `www`; `www` 301-redirects).

## Files

| File | Purpose |
|---|---|
| `index.html` | Homepage: structure + all **English** text (English is the default language) |
| `i18n.js` | **Slovenian** strings + language switcher, plus a few English strings used from JS |
| `script.js` | Menu, scroll reveal, contact form (Web3Forms) + security question |
| `styles.css` | All styling; colours are CSS variables (`--ink`, `--paper`, `--accent`, …) |
| `privacy.html` | Privacy policy — EN and SL versions both in the file (`data-only="en"` / `data-only="sl"`) |
| `404.html` | Not-found page (`noindex`; uses absolute `/` paths because it's served at any URL) |
| `assets/` | `nejc.jpg/.webp` (photo), `share.png` (1200×630 social image), `favicon.svg`, self-hosted `fonts/` |
| `robots.txt` | Allows all crawlers incl. AI bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended…) |
| `sitemap.xml` | Lists `/` and `/privacy.html` |
| `llms.txt` | Plain-text company summary for AI assistants |
| `.preview/` | Local screenshots/test files — git-ignored, not published |

Git-ignored source photos: `assets/116A5471*`, `assets/Gemini_Generated_Image_*` (originals, not published).

## How translations work (important)

- Elements with `data-i18n="key"` hold English in the HTML; `i18n.js` swaps in `STRINGS.sl[key]`.
- Attributes: `data-i18n-attr="content:meta.description"` (pairs separated by `;`).
- Whole blocks per language: `data-only="en"` / `data-only="sl"`.
- Language choice: `?lang=sl` in URL → saved in `localStorage` (`hw-lang`) → default `en`.
- **When adding or changing text: update BOTH the English in the HTML AND the Slovenian key in `i18n.js`.**
  Missing SL keys silently fall back to English.
- Slovenian is client-side only on the same URL, so Google mostly indexes the English text.

## SEO / AI-search rules

- **Exactly one `<h1>` per page** (Bing flagged duplicates). On `privacy.html` the Slovenian title is
  `<p class="legal__title" role="heading" aria-level="1">`, not an `<h1>`.
- `index.html` `<head>` has title, description, canonical, Open Graph and **JSON-LD** (`ProfessionalService`
  with services in `hasOfferCatalog`). Keep the JSON-LD valid JSON.
- When content changes (services, industries, tech, contacts), also update:
  1. `llms.txt`
  2. the JSON-LD in `index.html`
  3. `<lastmod>` dates in `sitemap.xml`
- When adding a new page: add it to `sitemap.xml`, give it its own `<title>`, description, canonical and one `<h1>`.
- Registered in **Google Search Console** (Domain property, verified via DNS TXT) and **Bing Webmaster Tools**
  (imported from Google). Sitemap submitted to both. After big changes, the owner can use "Request indexing"
  (Google URL Inspection) / "URL Submission" (Bing).

## Email & DNS (not in this repo — for reference)

- DNS: **freedns.si** (ns1/ns2/ns3.freedns.si).
- Mail: **Zoho Mail EU** (MX `mx.zoho.eu`, `mx2.zoho.eu`, `mx3.zoho.eu`; SPF `include:zohomail.eu`).
- Addresses used on the site: `info@skerjanc.org` (general), `nejc@skerjanc.org` (founder).
- Forwarding to Gmail is configured in Zoho (Settings → Mail Forwarding), not via DNS.
- Don't remove the Zoho MX/SPF/verification TXT records or the Google verification TXT record.

## Open TODOs

- [ ] **Contact form is not active yet**: `index.html` has `access_key` = `YOUR_WEB3FORMS_ACCESS_KEY`.
      Get a free key at web3forms.com (for info@skerjanc.org) and paste it in. Until then the form shows an
      error asking people to email directly.
- [ ] Company registration numbers in footer are commented out (`Matična št.` / `ID za DDV`) — add when provided.
- [ ] Optional: separate `/sl/` page with `hreflang` tags so Slovenian text gets indexed.

## Workflow

- Check changes locally by opening `index.html` in a browser (or `python3 -m http.server`).
- Test both languages (EN/SL buttons) and mobile width after edits.
- Commit with a clear message and push to `main` to deploy.
