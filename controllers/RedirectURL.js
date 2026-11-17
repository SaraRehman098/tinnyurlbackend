import { URLs } from "../models/url.js";

export const RedirectURL = async (req, res) => {
  const { shortId } = req.params;

  try {
    const resUrls = await URLs.find({ shortId: shortId });

    const element = resUrls[0];

    if (!element) {
      return res.status(404).json({
        ok: false,
        message: "URL not found",
      });
    }

    res.redirect(element.longURL);
  } catch (err) {
    res.status(500).json({
      ok: false,
      err: err.message,
    });
  }
};
