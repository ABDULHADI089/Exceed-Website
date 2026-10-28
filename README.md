# Exceed Cafe & Bar website

A responsive static website for Exceed Cafe & Bar: a dark sports lounge with gold accents, built around a call-to-reserve flow (no forms).

## Run locally
Open `index.html` in a browser, or run a local server from this directory:
- `python -m http.server 8000`
- Open `http://localhost:8000`

No build step or npm dependencies are required.

## Features
- **Hero:** clear headline, location, live open status, and "Reserve a Pool Table" as the main action, with a note to call and check availability.
- **Quick facts strip:** tables, rates, today's hours and location, right under the hero.
- **Pool cost guide:** choose players and time to see the cost per table and per person, using the till's rates (€2.25 / €3.00 per 15 min). It's labelled as a guide, not live availability.
- **Menu at a glance:** real starting prices for pizza, souvlaki, cocktails, coffee and draught beer; each tile opens that category. No invented "favourites".
- **Search inside the chosen category:** a result count, a clear button, and a one-tap "show matches in all categories".
- **Lightbox:** previous/next buttons and arrow keys; focus stays inside while it's open and returns to the photo you opened.
- **Scroll effects:** sections fade up gently as they appear, background photos move with a soft parallax, and a progress bar runs under the header.
- **Experience cards:** they tilt slightly, with a glare that follows the mouse (desktop only).
- **Full menu:** 252 items in 8 categories, with filter chips that stay pinned while scrolling, highlighted matches, and an "Everything" view.
- **Live status:** "Open now / Closed" badge in Cyprus time, with today's hours highlighted.
- **Mobile action bar:** Menu, Directions and Call to Reserve, fixed to the bottom and clear of the phone's home bar (safe-area aware); touch targets are at least 40px.
- **Reduced motion:** visitors who turn off animations get a still page with no reveals or parallax.
- **Search engines:** LocalBusiness structured data (hours, address, phone, menu link) and social preview tags.

## Content sources
- **Menu and prices (`menu-data.js`):** the venue's live HioPOS till menu (the "Menu" link on exceedcafebar.com points to it), captured 28 Oct 2026.
  - Till typos are fixed (e.g. GUINNES → Guinness, SMIRFNOFF → Smirnoff, TELLING → Teeling).
  - Internal till entries are left out: "My Menu", "Food", €0.00 items, team/loyalty pool rates and "lemon squash".
  - To change a price, edit the number next to the item in `menu-data.js`.
  - Re-checked 29 Oct 2026: same 261 till items and prices. Each item's "+ info" details were also captured: real size prices (draught 25cl/50cl, spirits 5cl/70cl) and ingredients for the 19 cocktails that have them. No food item has ingredients in the till.
- **Menu photos (`assets/menu/`):** the venue's own item photos from the same till menu, used for Food and Cocktails/Mocktails only (65 thumbnails, about 315 KB). Two are left out: item 315 (Skepasti 2) has a Shutterstock watermark, and item 310 (Tortilla) shows a person. Many of these look like internet stock photos, so the client should confirm they have the right to use them.
- **Darts photos (`assets/images/darts-*`):** free Unsplash photos (Unsplash License: free commercial use, no attribution required), used because no photo of the venue's own boards exists yet.
  - https://unsplash.com/photos/person-picking-dart-pins-on-board-8AiDiLLGmJs
  - https://unsplash.com/photos/green-darts-hitting-bullseye-on-dartboard-jl4BQJs87Do
  - Replace them with real photos of Exceed's two boards when available.
- **Business details:** address, phone, email, opening hours and social links come from exceedcafebar.com (homepage, About Us and Contacts pages).
- **Venue facts:** "5 professional pool tables" and "large-screen TVs" also come from exceedcafebar.com.
- **Darts:** the client told us on 28 Oct 2026 that the venue is known for darts and billiards and has 2 dart boards.
- **Photos and logo:** the site's WordPress media library, resized to WebP in `assets/images/`.

## Confirm with the client before launch
- **Reservation number:** the buttons use `+357 22 333 313`. The client messaged from `+357 99 237577`.
- **Pool rates:** the till also has "team" and "loyalty" rates, which aren't shown (the page says to ask at the bar). Should they be listed?
- **Food ingredients:** the till has none for food. What's in "Mama's", "Marco Polo", "Skepasti 1/2", and the pizza toppings? Adding them to the till's "+ info" would bring them onto the website on the next refresh.
- **Photos:** more are needed, especially of the TVs during a match, food, coffee and the outside of the building.
- **Map:** check that the Google Maps embed lands on the right building.
- **Darts:** no price is shown, at the client's request. Real photos of the two boards should replace the Unsplash ones.
- **Pool billing:** the cost guide assumes billing in 15-minute blocks (the till has 15-minute items). Confirm with the venue.
- **Events (What's On):** not built, because the venue hasn't confirmed any. Add it once they share real match nights or events.
- **Domain:** the `og:image`, canonical and JSON-LD URLs assume the site is served at https://www.exceedcafebar.com/.

## Files
- `index.html`: page structure, content and structured data
- `styles.css`: responsive styling and motion
- `script.js`: navigation, open-now status, menu rendering/search/filters, lightbox, scroll reveals, tilt and parallax
- `menu-data.js`: the full menu, prices, sizes, ingredients and photo paths
- `assets/menu/`: menu item thumbnails
- `assets/images/`: optimized venue photos, logo and favicon
