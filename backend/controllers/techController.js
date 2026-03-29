import Tech from "../models/TechStack.js";

/* GET */
export const getTech = async (req, res) => {
  const data = await Tech.find();
  res.json(data);
};

/* UPDATE (ADMIN SAVE) */
export const updateTech = async (req, res) => {
  await Tech.deleteMany(); // replace all

  const saved = await Tech.insertMany(req.body);

  res.json(saved);
};