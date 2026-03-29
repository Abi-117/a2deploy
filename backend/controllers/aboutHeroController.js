import AboutHero from "../models/AboutHero.js";

/* GET */
export const getAboutHero = async (req, res) => {
  try {
    let data = await AboutHero.findOne();

    // create default if empty
    if (!data) {
      data = await AboutHero.create({});
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* UPDATE */
export const updateAboutHero = async (req, res) => {
  try {
    let data = await AboutHero.findOne();

    if (!data) {
      data = await AboutHero.create(req.body);
    } else {
      Object.assign(data, req.body);
      await data.save();
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};