import {Transaction} from "../models/transaction.model.js";
import {Category} from "../models/category.model.js";
import { User } from "../models/user.model.js";

const addTransaction = async(req ,res)=>{
    try{
        const {amount , category , description , type } = req.body;

        const userId = req.user._id;

        if(!amount || !category || !userId){
            return res.status(400).json({
				success: false,
				message: "All Fields are Mandatory",
			});
        }

        let categoryDetails = await Category.find({name:category});

        if(!categoryDetails){
            categoryDetails = await category.create({name:category , type:type});
        }



        const t = await Transaction.create({
            amount,
            description:description || "",
            date : Date.now(),
            userId:userId,
            category: categoryDetails._id
        });

        const user = await User.findByIdAndUpdate(userId, { $inc: { coins: 1 } }, { new: true });


        return res.status(200).json({t , message:"Transaction added successfully"})

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
      

        return res.status(200).json({message:"Transaction removed successfully"})
        
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

        const allTransaction = await Transaction.find({userId:id}).populate("category");

        return res.status(200).json({allTransaction ,message:"Transaction fetched successfully" })
        
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


const clearTransactions = async(req , res)=>{
    try {

        const id = req.user._id;

        if(!id){
            return res.status(400).json({
				success: false,
				message: "user not specified",
			});
        }

        await Transaction.deleteMany({userId:id});

        return res.status(201).json({
            success: true,
            message: "deleted Successfully"
          
        });

        
    } catch (error) {
        console.error(error);
		return res.status(500).json({
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
    addTransaction,
    clearTransactions
    
}