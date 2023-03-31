import express from "express";
import { getAllFood, postFood } from "../controllers/food.js";

const router = express.Router();

router.get("/", getAllFood);
router.post("/add", postFood);

export default router;
