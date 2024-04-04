import mongoose, {Schema} from "mongoose"

const goalSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId, // one who is subscribing
            ref: "User"
        },
        currentAmount:{
            type:Number,
            require:true,
        },
        totalAmount:{   
            type:Number,
            require:true,
        },
        description:{
            type:String,
            require:true
        },
        startDate:{
            type: Date,
            require: true
        }
    }
)



export const Goal = mongoose.model("Goal", goalSchema);