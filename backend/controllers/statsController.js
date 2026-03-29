import Stats from "../models/Stats.js";

/* GET STATS */
export const getStats = async (req, res) => {
  try {
    const stats = await Stats.find();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* UPDATE STATS */
export const updateStats = async (req, res) => {
  try {
    await Stats.deleteMany();

    const newStats = await Stats.insertMany(req.body);

    res.json(newStats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};