import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const key = "portfolio_views";

  let views = await kv.get(key);

  if (!views) {
    views = 0;
  }

  views = Number(views) + 1;

  await kv.set(key, views);

  res.status(200).json({ views });
}