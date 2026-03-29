import express from "express";
import Testimonial from "../models/Testimonial.js";

const router = express.Router();

/* GET ALL */
router.get("/", async (req, res) => {
  const data = await Testimonial.find().sort({ createdAt: -1 });
  res.json(data);
});

/* CREATE */
router.post("/", async (req, res) => {
  const newItem = new Testimonial(req.body);
  await newItem.save();
  res.json(newItem);
});

/* DELETE */
router.delete("/:id", async (req, res) => {
  await Testimonial.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;