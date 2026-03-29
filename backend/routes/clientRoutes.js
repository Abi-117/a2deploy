import express from "express";
import { getClients, updateClients } from "../controllers/clientController.js";

const router = express.Router();

router.get("/clients", getClients);
router.put("/clients", updateClients);

export default router;