// api/storeClick.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { buttonClicked } = req.body;

    // Here you can store the data in a database or log it
    console.log(`Button clicked: ${buttonClicked}`);

    // Send a response back to the client
    res.status(200).json({ message: "Click stored successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
