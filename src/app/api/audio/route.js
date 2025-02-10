import { createWriteStream } from "fs";
import { Readable } from "stream";
import { finished } from "stream/promises";

export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.lemonfox.ai/v1/audio/speech", {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        input: "Artificial intelligence is the intelligence of machines or software.",
        voice: "sarah",
        response_format: "mp3"
      })
    });

    if (!response.ok) {
      res.status(response.status).json({ message: "Failed to fetch speech." });
      return;
    }

    const fileStream = createWriteStream("speech.mp3", { flags: "wx" });
    await finished(Readable.from(response.body).pipe(fileStream));

    res.status(200).json({ message: "File saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error processing request", error: error.message });
  }
}
