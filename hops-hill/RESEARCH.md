# Business Research — Hops Hill at Atlantic (demo site)

Compiled 3 August 2026 for `hops-hill/index.html`.

## Verified facts

| Fact | Value | Source(s) |
|---|---|---|
| Name | Hops Hill at Atlantic | Yelp, Tripadvisor, Untappd |
| Address | 533 Atlantic Ave, Brooklyn, NY 11217 (Boerum Hill) | Yelp, BeerMenus, Corner |
| Phone | (347) 294-4992 | Yelp |
| Hours | Mon–Thu 2 PM–12 AM · Fri 2 PM–2 AM · Sat 12 PM–2 AM · Sun 1 PM–9 PM | Yelp, Tripadvisor |
| Type | Craft beer bar / beer garden | Yelp, BeerAdvocate, Brewver |
| Taps | 16 rotating, weighted to East Coast breweries | BeerMenus, Untappd |
| Cellar | 277 cans, 141 bottles, 12 crowlers (latest count) | BeerMenus |
| Known for | Sours, barrel-aged stouts, the backyard | Corner, Yelp, BeerAdvocate |
| Extras | Wine list, outlets, BYO food, crowlers to go | Corner, Yelp |
| Second location | Original is in Clinton Hill | hops-hill.com |
| Existing website | **Yes** — hops-hill.com | hops-hill.com |

## Review lines used

- "An unusually good selection of sours, and the bartenders know their stuff."
- "The backyard is a gem — perfect for summer afternoons or watching the game."

## Note on intent

Unlike the other demos in this repo, Hops Hill **already has a website** (hops-hill.com), so this
is a redesign pitch rather than a first site.

## Design brief

Requested: full mobile optimisation, animations, colouring matched to the vibe. Taproom palette —
dark hop green ground, amber beer gradients, cream, with a rose accent reserved for sours.
Archivo Black display against Inter.

Animations, all gated behind `prefers-reduced-motion`: rising amber bubbles generated in JS,
drifting hero glow, count-up stat strip, keg-level fill bars that animate when scrolled into view,
a seamless marquee, staggered scroll reveals and scrollspy on the tab bar.

No photography — every visual is CSS. Image hosts are unreachable from the build environment, so
stock URLs could not be verified and would have risked broken images.

## Sources

- Yelp: https://www.yelp.com/biz/hops-hill-brooklyn-2
- Tripadvisor: https://www.tripadvisor.com/Restaurant_Review-g60827-d26942103-Reviews-Hops_Hill_At_Atlantic-Brooklyn_New_York.html
- BeerMenus: https://www.beermenus.com/places/81133-hops-hill-atlantic
- Untappd: https://untappd.com/v/hops-hill-atlantic/11700296
- Corner: https://www.corner.inc/place/pSeFr4Roqvka
- Brewver: https://brewver.com/venues/44358/Hops-Hill-Atlantic-Ave
- Official site: https://hops-hill.com/boerum-hill---atlantic-ave.html

## Caveats

- **Tap list and keg levels are invented placeholders.** The real board rotates constantly and
  lives on BeerMenus and Untappd; the page says so and points to the phone number.
- Cellar counts (277/141/12) were accurate at the time of the BeerMenus snapshot and will drift.
- "Backyard opens in warmer weather" comes from listing descriptions; confirm seasonal dates.
