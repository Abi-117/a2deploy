import express from "express";
import { getStats, updateStats } from "../controllers/statsController.js";

const router = express.Router();

router.get("/stats", getStats);
router.put("/stats", updateStats);

export default router;