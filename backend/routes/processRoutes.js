import express from "express";
import ProcessStep from "../models/ProcessStep.js";

const router = express.Router();

/* GET ALL */
router.get("/", async (req, res) => {
  const data = await ProcessStep.find({ active: true })
    .sort({ order: 1 });

  res.json(data);
});

/* CREATE */
router.post("/", async (req, res) => {
  const step = new ProcessStep(req.body);
  await step.save();
  res.json(step);
});

/* UPDATE */
router.put("/:id", async (req, res) => {
  const updated = await ProcessStep.findByIdAndUpdate(
    req.params.id,
    req.body,
    { returnDocument: "after" }
  );

  res.json(updated);
});

/* DELETE */
router.delete("/:id", async (req, res) => {
  await ProcessStep.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;