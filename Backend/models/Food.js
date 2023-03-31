import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },
  foodStatus: {
    type: String,
    required: true,
  },
});

const Food = mongoose.model("Food", foodSchema);
export default Food;
