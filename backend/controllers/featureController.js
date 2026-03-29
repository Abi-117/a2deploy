import Feature from "../models/Feature.js";

/* GET ALL FEATURES */
export const getFeatures = async (req, res) => {
  try {
    const features = await Feature.find();
    res.json(features);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* SAVE FEATURES (CMS SAVE) */
export const saveFeatures = async (req, res) => {
  try {
    await Feature.deleteMany(); // replace old

    const created = await Feature.insertMany(req.body);

    res.json(created);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};