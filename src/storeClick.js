// api/storeClick.js
import dbConnect from "../../lib/mongodb";
import Click from "../../models/Click";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { buttonClicked } = req.body;

    await dbConnect();

    try {
      const click = new Click({ buttonClicked });
      await click.save();
      console.log(`Button clicked: ${buttonClicked}`);
      res.status(200).json({ message: "Click stored successfully" });
    } catch (error) {
      console.error("Failed to store click data:", error);
      res.status(500).json({ message: "Failed to store click data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
