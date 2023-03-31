import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/food.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGOURL, () => {
  console.log("connected to DB");
});

app.use("/food", router);

app.listen(process.env.PORT, () => {
  console.log("hello server is started ");
});
