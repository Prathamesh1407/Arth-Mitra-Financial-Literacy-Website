import {Goal} from "../models/goal.model.js";


const addGoal = async(req ,res)=>{
    try{
        const {currentAmount , totalAmount , description , startDate} = req.body;

        const id = req.user._id;

        if(!currentAmount || !totalAmount || !description || !startDate || !id){
            return res.status(400).json({
				success: false,
				message: "All Fields are Mandatory",
			});
        }

        const newGoal = await Goal.create({
            userId:id,
            currentAmount,
            totalAmount,
            description,
            startDate
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

const removeGoal = async(req , res)=>{
    try {

        const {id} = req.body;

        if(!id){
            return res.status(400).json({
				success: false,
				message: "All Fields are Mandatory",
			});
        }

        await Goal.findByIdAndDelete(id);
      

        return res.status(200).json({message: "Transaction removed successfully"})
        
    } catch (error) {
        console.error(error);
		res.status(500).json({
			success: false,
			message: "Failed to remove transaction",
			error: error.message,
		});
    }
}

const getAllGoal = async(req ,res)=>{
    
  try {
    const allGoals = await Goal.find({userId: req.user._id});


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
}

const getGoal = async(req, res)=>{
    try {

        const {id} = req.body;

        const goal  = await Goal.findById(id);

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
}

const UpdateAmount = async(req ,res)=>{
    try {
        const {id , amount } = req.body;

        const goal  = await Goal.findById(id);

        if(!goal || !amount){
            return res.status(400).json({
				success: false,
				message: "All Fields are Mandatory",
			});
        }

        goal.currentAmount += amount;

        await goal.save();


        return res.status(201).json({
            success: true,
            message: "Current amount updated in goal",
            goal,
        });
        
    } catch (error) {
        console.error(error);
		res.status(500).json({
			success: false,
			message: "Failed to update amount",
			error: error.message,
		});
    }
}


export {
    getAllGoal,
    getGoal,
    removeGoal,
    addGoal,
    UpdateAmount
}