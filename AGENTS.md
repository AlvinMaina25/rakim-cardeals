<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project: Cardeals by Rickmann

- Brand: **Cardeals by Rickmann** (Mombasa car dealer). Do not reintroduce
  "BEN AUTO DEALS", "Eric Car Deals", or "AuraAuto / Aura Motors" as current branding.
- All business info (name, address, phones, email, socials, WhatsApp/map helpers)
  comes from `src/config/brand.ts`. Never hardcode contact details elsewhere.
- Supplied facts: name, Mombasa location (no street address), phone 0702348300,
  Instagram profile `_cardeals_by_rickmann_`. No tagline has been supplied.
  Do not invent business facts (street address, awards, statistics, testimonials, staff names, opening hours, email,
  social handles, nationwide claims). Use a `TODO(client)` placeholder instead —
  nothing shows while a value is TODO/null.
- Keep prior-brand favorites keys (`benautodeals.favorites`,
  `ericcardeals.favorites`, `auraauto.favorites`) in `src/services/favorites.ts`
  for one-time migration; do not remove existing visitors' saved cars.
- Keep the existing architecture, routes, database schema, auth and payments intact.

## Logo & visual identity

- The dealership badge mark lives at `src/assets/cardeals-by-rickmann-badge.png` (a real file, imported directly — not a Lovable `.asset.json` pointer, which breaks outside Lovable).
  The single lockup
  component is `src/components/layout/BrandLogo.tsx` — use it in the header,
  footer and auth pages instead of re-creating the wordmark by hand.
- Favicon (`public/favicon.png`) and `public/apple-touch-icon.png` use the
  supplied profile badge. Do not replace them with unrelated icons.
- Palette: obsidian-slate dark base with warm amber-gold/bronze and magenta accents —
  keep all colors in `src/styles.css` oklch tokens; never hardcode colors.
- The footer hides business hours while `brand.hours` still starts with
  "TODO" — never invent hours, just fill in `src/config/brand.ts`.
