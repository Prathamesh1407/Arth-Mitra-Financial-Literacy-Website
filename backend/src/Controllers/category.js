import {Transaction} from "../models/transaction.model.js";
import {Category} from "../models/category.model.js";


const addCategory = async(req ,res)=>{
    try{
        const {name , type} = req.body;

        if(!name || !type){
            return res.status(400).json({
				success: false,
				message: "All Fields are Mandatory",
			});
        }


        const categoryDetails = await Category.create({name , type});

        return res.status(200).json({categoryDetails , message:"Category added successfully" })

    }catch(error){
        console.error(error);
		res.status(500).json({
			success: false,
			message: "Failed to add category",
			error: error.message,
		});
    }
}

const removeCategory = async(req , res)=>{
    try {

        const {id} = req.body;

        if(!id){
            return res.status(400).json({
				success: false,
				message: "All Fields are Mandatory",
			});
        }

        await Transaction.findByIdAndDelete(id);
      

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

const getAllCategories = async(req ,res)=>{
    
  try {
    const allCategories = await Category.find({});
    return res.status(201).json({
      success: true,
      message: "Category Successfully Displayed",
      allCategories,
    });
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: err,
    });
  }
}

export{
    getAllCategories,
    removeCategory,
    addCategory
}