import express from "express";
import { Classify } from "../controllers/ClassifyController.js";


const router = express.Router();

router.post("/verify",Classify);

export default router;