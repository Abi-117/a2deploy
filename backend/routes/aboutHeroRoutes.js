import express from "express";
import {
  getAboutHero,
  updateAboutHero
} from "../controllers/aboutHeroController.js";

const router = express.Router();

router.get("/", getAboutHero);
router.put("/", updateAboutHero);

export default router;