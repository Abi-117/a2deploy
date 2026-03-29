import express from "express";
import { getTech, updateTech } from "../controllers/techController.js";

const router = express.Router();

router.get("/", getTech);
router.put("/", updateTech);

export default router;