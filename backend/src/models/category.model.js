import mongoose, {Schema} from "mongoose"

const categorySchema = new Schema(
    {   
        name:{
            type:String,
            required:true
        },
        type:{
            type: String,
            enum:["expense","income"],
            required: true
        }
    }
)



export const Category = mongoose.model("Category", categorySchema);