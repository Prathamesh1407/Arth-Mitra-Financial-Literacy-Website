import {Transaction} from "../models/transaction.model.js";
import {Category} from "../models/category.model.js";
import { User } from "../models/user.model.js";

const addTransaction = async(req ,res)=>{
    try{
        const {amount , category , description , date } = req.body;

        const userId = req.user._id;

        if(!amount || !category || !description || !userId){
            return res.status(400).json({
				success: false,
				message: "All Fields are Mandatory",
			});
        }

        const categoryDetails = await Category.find({name:category});



        const t = await Transaction.create({
            amount,
            description,
            date : date|| Date.now(),
            userId:userId,
            category: categoryDetails._id

        });

        return res.status(200).json(200, t , "Transaction added successfully")

    }catch(error){
        console.error(error);
		res.status(500).json({
			success: false,
			message: "Failed to add transaction",
			error: error.message,
		});
    }
}

const removeTransaction = async(req , res)=>{
    try {

        const {transactionId} = req.body;

        if(!transactionId){
            return res.status(400).json({
				success: false,
				message: "All Fields are Mandatory",
			});
        }

        await Transaction.findByIdAndDelete(transactionId);
      

        return res.status(200).json(200 , "Transaction removed successfully")
        
    } catch (error) {
        console.error(error);
		res.status(500).json({
			success: false,
			message: "Failed to remove transaction",
			error: error.message,
		});
    }
}

const getAllTransaction = async(req , res)=>{

    try {

        const id = req.user._id;

        const user = await User.findById(id);

        if(!user){
            return res.status(400).json({
				success: false,
				message: "All Fields are Mandatory",
			});
        }

        const allTransaction = await Transaction.find({userId:id}).populate("Category");

        return res.status(200).json(200 , allTransaction ,"Transaction fetched successfully")
        
    } catch (error) {
        console.error(error);
		res.status(500).json({
			success: false,
			message: "Failed",
			error: error.message,
		});
    }

}

const getTransaction = async(req, res)=>{
    try {

        const {id} = req.body;

        const transaction = await Transaction.findById(id).populate("Category");
        return res.status(201).json({
            success: true,
            message: "Category Successfully Displayed",
            transaction,
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

export{
    getAllTransaction,
    getTransaction,
    removeTransaction,
    addTransaction
    
}