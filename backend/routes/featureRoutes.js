import express from "express";
import { getFeatures, saveFeatures } from "../controllers/featureController.js";

const router = express.Router();

/* CORRECT ROUTES */
router.get("/features", getFeatures);
router.put("/features", saveFeatures);

export default router;