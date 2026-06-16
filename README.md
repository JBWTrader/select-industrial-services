# Select Industrial Services — website

Static multi-page marketing site for **Select Industrial Services** (Auckland) — industrial
hygiene cleaning and clean-verification for NZ food, dairy, meat and beverage plants.

Built with plain **HTML + Tailwind CSS (Play CDN)** and a little vanilla JS. **No build step.**

## Run it

Just open `index.html` in any browser. Everything is relative-path, so it also works from any
static host. (An internet connection is needed the first time, because Tailwind and the Inter
font load from a CDN.)

Optional local server:
```
npx serve .
```

## Pages

| File | Purpose |
|------|---------|
| `index.html`       | Home — hero, value props, verification strip, services, redline teaser, sectors |
| `services.html`    | Full service list + "how every job runs" methodology |
| `food-safety.html` | ★ Redline zoning, high-care areas, APC verification, the 7-step clean, tools, compliance |
| `sectors.html`     | Dairy (featured) + food, meat, beverage, general manufacturing |
| `about.html`       | Company, how we operate, accreditation strip (placeholders) |
| `contact.html`     | Site-visit/quote form + contact details |

Shared assets: `assets/css/site.css`, `assets/js/site.js`. Brand colours live in the inline
`tailwind.config` block in each page's `<head>` (clinical blue `#0E72C5`, hygiene green `#16A34A`).

## Real business details baked in
- **Contact:** Pam Landers · +64 21 0273 0014 · pamlanders@selectindustrialservices.co.nz · Auckland
- **Credentials shown:** HACCP principles · RMP oriented · risk assessment before cleaning ·
  WorkSafe compliant · MPI-approved chemicals only · work-at-height / scissor-lift · APC & micro-trained staff

## TODO before going live (placeholders to swap)
1. **Contact form** is front-end only. In `contact.html`, set the `<form>` `action` to a real
   endpoint (e.g. a [Formspree](https://formspree.io) form ID) and keep `method="POST"`.
   `assets/js/site.js` already lets a real `action` submit normally.
2. **Images** — add real photos and remove the dashed placeholders:
   - hero background (referenced in `index.html` notes) → `assets/img/hero.jpg`
   - dairy sector image in `sectors.html` → `assets/img/dairy.jpg`
3. **Accreditation logos** in `about.html` — add only certifications the business actually holds.
4. **Logo** — currently a clean text logo ("S" tile + wordmark). Drop in a real logo if available.
5. Optional: add a real favicon, and (for production speed) compile Tailwind instead of the CDN.

## Notes
- Accessible: semantic landmarks, labelled form fields, alt/aria on the SVG diagram, AA-contrast colours, focus rings, reduced-motion support.
- Responsive down to mobile (hamburger nav).
- No certifications were fabricated — only the credentials you supplied are stated.
