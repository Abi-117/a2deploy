import express from "express";
import { getAbout, saveAbout } from "../controllers/aboutController.js";

const router = express.Router();

router.get("/about", getAbout);
router.put("/about", saveAbout);

export default router;