import mongoose, {Schema} from "mongoose"

const transactionSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId, // one who is subscribing
            ref: "User"
        },
        category: {
            type: Schema.Types.ObjectId, // one to whom 'subscriber' is subscribing
            ref: "Category"
        },
        amount:{
            type:Number,
            require:true,
        },
        description:{
            type:String,
            require:true
        },
        date:{
            type: Date,
            require: true,
            default: new Date(Date.now()),
        }
    }, 
    {timestamps: true}
)



export const Transaction = mongoose.model("Transaction", transactionSchema);