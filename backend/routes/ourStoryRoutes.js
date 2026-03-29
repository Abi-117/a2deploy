import express from "express";
import {
  getOurStory,
  updateOurStory,
  addMilestone,
  updateMilestone,
  deleteMilestone
} from "../controllers/ourStoryController.js";

const router = express.Router();

router.get("/", getOurStory);
router.put("/", updateOurStory);

router.post("/milestone", addMilestone);
router.put("/milestone/:id", updateMilestone);
router.delete("/milestone/:id", deleteMilestone);

export default router;