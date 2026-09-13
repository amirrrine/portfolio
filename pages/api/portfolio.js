import fs from "fs";
import { join } from "path";

export default function handler(req, res) {
  if (process.env.NODE_ENV !== "development") {
    return res.status(403).json({
      error: "This route only works in development mode.",
    });
  }

  if (req.method === "POST") {
    try {
      const portfolioData = join(process.cwd(), "data", "portfolio.json");
      fs.writeFileSync(
        portfolioData,
        JSON.stringify(req.body, null, 2),
        "utf-8"
      );
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(200).json({
    message: "This route works in development mode only",
  });
}
