# Business Research — Paraíso Bar (demo site)

Research compiled 3 August 2026 for the demo website at `paraiso-bar/index.html`.

## Name check first

The request referred to a bar called **"Loco"** at 1752 Bath Ave. No bar of that name exists at
that address, or anywhere in ZIP 11214 — the only Brooklyn matches for "Loco" are El Loco Burrito
(Williamsburg, 11211), Loco Lobster (11234) and Lobo Loco (8530 3rd Ave, closed). Every current
listing for **1752 Bath Ave** shows **Paraíso Bar**, and the site was built under that name with
the owner's confirmation.

Previous tenants at the same address, per Yelp: **Tanjia** (hookah bar, closed) and **Goal Post**.

## Verified facts

| Fact | Value | Source(s) |
|---|---|---|
| Name | Paraíso Bar (registered as Paraiso Bar Inc.) | Yelp, Facebook, Nooklyn |
| Address | 1752 Bath Ave, Brooklyn, NY 11214 (Bath Beach) | Yelp, Nooklyn, Atly |
| Phone | (718) 484-3988 | Yelp, Nooklyn |
| Hours | Wednesday–Sunday, 7:00 PM – 4:00 AM | Nooklyn, Yelp |
| Type | Neighbourhood bar / cocktail bar | Yelp, Atly, Nuclear Directories |
| Features | Live music, sport nights, private events, bar bites | Nooklyn, Atly |
| Food | Guests can order in from the kitchen next door | Nooklyn |
| Social | Instagram @paraisobarinc, Facebook "Paraiso Bar Inc." | Instagram, Facebook |
| Website | **None** — directory and social listings only | see caveats |

## Review lines used on the site

- "I love how chill and fun the bar feels"
- "The music here always keeps the vibe alive"
- Described in listings as offering a cosy, welcoming atmosphere with a diverse drink selection

## Design brief

Requested: **dark, classic vibes.** Delivered as a late-night cocktail-lounge treatment rather
than the loud cantina styling used for El Jaguar — near-black ground, brass gradient type,
burgundy and palm-green accents, Playfair Display serif with wide-tracked sans small caps,
art-deco rules and a circular monogram crest.

The page uses **no photography at all**: every visual element is CSS or inline SVG (grain overlay,
brass gradients, deco frame, diamond ornaments). That was a deliberate choice — image hosts are
unreachable from the build environment, so any stock photo URL would have been unverifiable and
risked shipping broken images. The result is fully self-contained and degrades to nothing.

## Sources

- Yelp: https://www.yelp.com/biz/paraiso-bar-brooklyn
- Nooklyn: https://nooklyn.com/locations/on8UrNmciqcivZsylpIQ
- Atly: https://www.atly.com/location/ParaisoBar
- Facebook: https://www.facebook.com/p/Paraiso-Bar-Inc-100086198243586/
- Instagram: https://www.instagram.com/paraisobarinc/
- Wheree: https://paraiso-bar-1.wheree.com/
- Tanjia (prior tenant): https://www.yelp.com/biz/tanjia-brooklyn-3
- Goal Post (prior tenant): https://www.yelp.com/biz/goal-post-brooklyn

## Caveats

- **Drink list and prices are invented placeholders.** Menu aggregators block automated fetching,
  so no real drink prices could be sourced. The page says so plainly and points to the phone number.
- **Hours have one conflict.** Listings state 7 PM – 4 AM, but one source separately notes the bar
  "closes at 2am, which is rare in this area." 7 PM – 4 AM is used as the published figure and
  should be confirmed with the owners.
- The "live music most weekends" framing comes from listing features and review mentions; the
  actual schedule should be confirmed.
- Cross-street detail ("between Bay 17th & Bay 19th") is inferred from the block numbering and
  should be checked.
- Paraíso Bar currently has **no website of its own**, which is what makes it a live prospect —
  it appears on the NYC call sheet built earlier in this project.
