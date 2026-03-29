import express from "express";
import Team from "../models/Team.js";

const router = express.Router();

/* ===============================
   GET ALL TEAM MEMBERS
=================================*/
router.get("/", async (req, res) => {
  try {
    const data = await Team.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    console.error("GET TEAM ERROR:", err);
    res.status(500).json({ message: "Server Error" });
  }
});


/* ===============================
   ADD TEAM MEMBER
=================================*/
router.post("/", async (req, res) => {
  try {
    const { name, role, desc, icon } = req.body;

    // ✅ validation (fixes your error)
    if (!name || !role) {
      return res.status(400).json({
        message: "Name and Role are required"
      });
    }

    const team = new Team({
      name: name.trim(),
      role: role.trim(),
      desc,
      icon
    });

    await team.save();

    res.status(201).json(team);

  } catch (err) {
    console.error("CREATE TEAM ERROR:", err);
    res.status(500).json({ message: "Server Error" });
  }
});


/* ===============================
   UPDATE TEAM MEMBER
=================================*/
router.put("/:id", async (req, res) => {
  try {
    const { name, role } = req.body;

    // optional validation during update
    if (!name || !role) {
      return res.status(400).json({
        message: "Name and Role required"
      });
    }

    const updated = await Team.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updated) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.status(200).json(updated);

  } catch (err) {
    console.error("UPDATE TEAM ERROR:", err);
    res.status(500).json({ message: "Server Error" });
  }
});


/* ===============================
   DELETE TEAM MEMBER
=================================*/
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Team.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.status(200).json({ message: "Deleted successfully" });

  } catch (err) {
    console.error("DELETE TEAM ERROR:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;