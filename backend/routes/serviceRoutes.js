import express from "express";
import { getServices, updateServices } from "../controllers/serviceController.js";

const router = express.Router();

router.get("/services", getServices);

router.put("/services", updateServices);

export default router;