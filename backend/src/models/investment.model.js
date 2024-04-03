import mongoose, {Schema} from "mongoose"

const investmentSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId, // one who is subscribing
            ref: "User"
        },
        initAmount:{
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
        },
        currentAmount:{
            type:Number,
            
        },
        rate:{
            type:Number
        }

    }, 

)



export const Investment = mongoose.model("Investment", investmentSchema);