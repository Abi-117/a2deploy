import express from "express";
import Servicepage from "../models/Servicepage.js";

const router = express.Router();

/* ================= GET ALL ================= */
router.get("/", async (req, res) => {
  try {
    const data = await Servicepage
      .find()
      .sort({ order: 1, createdAt: -1 }); // ⭐ important

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= CREATE ================= */
router.post("/", async (req, res) => {
  try {

    const count = await Servicepage.countDocuments();

    const service = new Servicepage({
      ...req.body,
      order: count
    });

    await service.save();
    res.json(service);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ================= DELETE ================= */
router.delete("/:id", async (req, res) => {
  try {
    await Servicepage.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ================= UPDATE ================= */
router.put("/:id", async (req, res) => {
  try {
    const updated = await Servicepage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" }
    );

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ================= REORDER ================= */
router.put("/reorder", async (req, res) => {
  try {
    const { services } = req.body;

    const updates = services.map((s, index) =>
      Servicepage.findByIdAndUpdate(s._id, { order: index })
    );

    await Promise.all(updates);

    res.json({ message: "Order updated" });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;