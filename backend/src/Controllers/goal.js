import { Goal } from "../models/goal.model.js";
import { User } from "../models/user.model.js";

const addGoal = async (req, res) => {
  try {
    const { currentAmount, totalAmount, description } = req.body;

    const id = req.user._id;

    if ( !totalAmount || !description || !id) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      });
    }

    const user = await User.findByIdAndUpdate(
      id,
      { $inc: { coins: 1 } },
      { new: true }
    );

        const newGoal = await Goal.create({
            userId:id,
            currentAmount:currentAmount || 0,
            totalAmount,
            description,
            startDate: Date.now()
        })
        console.log(newGoal)
        return res.status(200).json({ newGoal , message:"Goal added successfully"})

    }catch(error){
        console.error(error);
		res.status(500).json({
			success: false,
			message: "Failed to add goal",
			error: error.message,
		});
    }
}

const removeGoal = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      });
    }

    await Goal.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ message: "Transaction removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to remove transaction",
      error: error.message,
    });
  }
};

const getAllGoal = async (req, res) => {
  try {
    const allGoals = await Goal.find({ userId: req.user._id });

    return res.status(201).json({
      success: true,
      message: "Category Successfully Displayed",
      allGoals,
    });
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: err,
    });
  }
};

const getGoal = async (req, res) => {
  try {
    const { id } = req.body;

    const goal = await Goal.findById(id);

    return res.status(201).json({
      success: true,
      message: "Category Successfully Displayed",
      goal,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to remove transaction",
      error: error.message,
    });
  }
};

const UpdateAmount = async (req, res) => {
  try {
    let { id, amount } = req.body;

    const goal = await Goal.findById(id);

    if (!goal || !amount) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      });
    }

    amount = parseInt(amount);

    // const prevP = (goal.currentAmount / goal.totalAmount) * 100;

    goal.currentAmount += amount;

    if (goal.currentAmount > goal.totalAmount) {
      goal.currentAmount = goal.totalAmount;
    }

    await goal.save();

    // const afterP = (goal.currentAmount / goal.totalAmount) * 100;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $inc: { coins: 5 } },
      { new: true }
    );

    return res.status(201).json({
      success: true,
      message: "Current amount updated in goal",
      goal,
      // increment: afterP - prevP,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to update amount",
      error: error.message,
    });
  }
};

export { getAllGoal, getGoal, removeGoal, addGoal, UpdateAmount };
