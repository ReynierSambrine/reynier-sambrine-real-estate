# Reynier Sambrine — Real Estate

Responsive, multilingual landing page for Reynier Sambrine, Real Estate Broker Associate at Key & Legacy Realty.

## Preview locally
Open `index.html` in a browser. For local development, a simple static server can be used, for example `python -m http.server 8000`.

## Publish with Cloudflare Pages
This repository is prepared for Cloudflare Pages' Git integration:

1. In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git**.
2. Select `ReynierSambrine/reynier-sambrine-real-estate`.
3. Use the `main` branch. Since this is a static site, leave the build command empty and set the output directory to `/` (or `.` if the dashboard requires a directory name).
4. Deploy. Cloudflare will provide a `*.pages.dev` preview URL.
5. Review the preview before connecting the custom domain. Do not change nameservers; add the custom domain through the Pages project when approved.

## Notes
- The language selector supports Spanish (default), English, and Italian.
- The mortgage tool is an informational estimate; it excludes HOA and PMI.
- Contact forms currently prepare an email in the visitor's default mail app. They do not store or transmit lead data to a backend.
- Current portrait and property photography are temporary stock-image previews. Replace them with Reynier's supplied portrait and approved corporate logo assets before the final launch.
- The RS monogram and Key & Legacy Realty name are typographic placeholders until the provided image assets are added.
