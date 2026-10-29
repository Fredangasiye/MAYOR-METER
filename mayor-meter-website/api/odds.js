// Optional: same-origin fallback for Vercel, used if the browser can't reach Polymarket directly.
export default async function handler(req, res) {
  try {
    const r = await fetch('https://gamma-api.polymarket.com/events?slug=next-mayor-of-johannesburg-20260609220245506');
    const d = await r.json();
    res.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate=30');
    res.status(200).json(Array.isArray(d) ? d[0] : d);
  } catch (e) {
    res.status(502).json({ error: 'Polymarket unavailable' });
  }
}
