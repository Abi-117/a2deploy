import express from "express";
import {
  getValues,
  createValue,
  updateValue,
  deleteValue
} from "../controllers/valueController.js";

const router = express.Router();

router.get("/", getValues);
router.post("/", createValue);
router.put("/:id", updateValue);
router.delete("/:id", deleteValue);

export default router;