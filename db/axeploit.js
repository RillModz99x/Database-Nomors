export default async function handler(req, res) {
  const url = "https://raw.githubusercontent.com/RillModz99x/Database-Nomors/main/axeploit.json";
  try {
    const r = await fetch(url);
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Gagal ambil data" });
  }
}
