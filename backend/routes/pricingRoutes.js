import express from "express";
import Pricing from "../models/Pricing.js";

const router = express.Router();

/* GET ACTIVE PLANS (Frontend) */
router.get("/", async (req, res) => {
  const data = await Pricing.find({ active: true })
    .sort({ order: 1 });

  res.json(data);
});

/* ADMIN GET ALL */
router.get("/admin", async (req, res) => {
  const data = await Pricing.find().sort({ order: 1 });
  res.json(data);
});

/* CREATE */
router.post("/", async (req, res) => {
  const plan = new Pricing(req.body);
  await plan.save();
  res.json(plan);
});

/* UPDATE */
router.put("/:id", async (req, res) => {
  const updated = await Pricing.findByIdAndUpdate(
    req.params.id,
    req.body,
    { returnDocument: "after" }
  );

  res.json(updated);
});

/* DELETE */
router.delete("/:id", async (req, res) => {
  await Pricing.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

/* REORDER */
router.post("/reorder", async (req, res) => {
  const { items } = req.body;

  await Promise.all(
    items.map((id, index) =>
      Pricing.findByIdAndUpdate(id, { order: index })
    )
  );

  res.json({ success: true });
});

export default router;