import About from "../models/About.js";

/* GET */
export const getAbout = async (req, res) => {
  try {
    const data = await About.findOne();
    res.json(data || {});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* SAVE / UPDATE */
export const saveAbout = async (req, res) => {
  try {
    let about = await About.findOne();

    if (!about) {
      about = new About(req.body);
    } else {
      Object.assign(about, req.body);
    }

    await about.save();

    res.json(about);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};