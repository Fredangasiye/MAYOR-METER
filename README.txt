MAYOR METER - Johannesburg mayor odds skyline

Files
- index.html : the whole site, no build step
- games.html : the Mayor Meter Arcade (3 quiz games per candidate). All facts come from public reporting and
  published campaign material, with a source on every answer. The data sits at the top of its script (MM_DATA);
  update it and its contentUpdated date as the race changes. Content was last checked on 27 Oct 2026.
- api/odds.js : optional Vercel function, a fallback if the browser is blocked from Polymarket
- photos/ : optional local candidate photos (see photos/README.txt)

Live data
The page reads Polymarket's public event "next-mayor-of-johannesburg-20260609220245506"
every 30 seconds. Every candidate on that market gets a building (top 8), with
Polymarket's own photo. If Polymarket is unreachable it shows the last saved odds,
then a dated snapshot as a last resort.

Hillbrow Tower is always Helen Zille's building. If the market ever uses a new event
slug, change SLUG at the top of the script in index.html (and in api/odds.js).

Publish: upload the folder to Vercel, Netlify or GitHub Pages.
