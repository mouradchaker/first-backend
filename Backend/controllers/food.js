import Food from "../models/Food.js";

export const getAllFood = async (req, res) => {
  try {
    const food = await Food.find({});
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const postFood = async (req, res) => {
  try {
    const { foodName, foodStatus } = req.body;
    const foods = await Food.create({
      foodName,
      foodStatus,
    });
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
