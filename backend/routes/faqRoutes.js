import express from "express";
import Faq from "../models/Faq.js";

const router = express.Router();

/* ================= GET ALL FAQ ================= */
router.get("/", async (req, res) => {
  const data = await Faq.find().sort({ createdAt: -1 });
  res.json(data);
});

/* ================= ADD FAQ ================= */
router.post("/", async (req, res) => {
  const faq = new Faq(req.body);
  await faq.save();
  res.json(faq);
});

/* ================= UPDATE FAQ ================= */
router.put("/:id", async (req, res) => {
  const updated = await Faq.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

/* ================= DELETE FAQ ================= */
router.delete("/:id", async (req, res) => {
  await Faq.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;