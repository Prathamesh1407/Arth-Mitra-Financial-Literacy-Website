import mongoose, {Schema} from "mongoose"

const categorySchema = new Schema(
    {   
        name:{
            type:String,
            required:true
        },
        type:{
            type: String,
            enum:["outgoing","incoming"],
        }
    }
)



export const Category = mongoose.model("Category", categorySchema);