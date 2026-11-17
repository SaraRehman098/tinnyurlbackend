import { URLs } from "../models/url.js";
import { generateShortId } from "../utils/keys.js";

export const SaveURL = async (req, res) => {
  const { longUrl } = req.body;
  try {
    console.log("Request Body:", req.body);
    console.log("Long URL:", longUrl);
    const shortId = generateShortId(7);
    const newURL = new URLs({
      longURL: longUrl,
      shortId: shortId,
    });
    await newURL.save();
    const shortURL = `http://localhost:5050/${shortId}`;
    res.status(200).json({
      ok: true,
      shortURL: shortURL,
    });
  } catch (err) {
    console.error("Save URL Error:", err);

    res.status(500).json({
      ok: false,
      err: err.message,
    });
  }
};
