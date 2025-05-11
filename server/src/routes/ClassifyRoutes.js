import express from "express";
import { Classify } from "../controllers/ClassifyController.js";
import upload from "../middlewares/multer.js";


const router = express.Router();



router.post("/classify-waste",upload.single('image'),Classify);

export default router;