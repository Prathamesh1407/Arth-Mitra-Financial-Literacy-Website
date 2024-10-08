import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        ageGroup:{
            type:Number,
            enum:[1 ,2 ,3 ,4],

        },
        refreshToken: {
            type: String
        },
        coins:{
            type:Number
        }

    }
);

userSchema.pre("save" , async function(next){

    if( ! this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password , 10);

    next();

})

userSchema.methods.checkPassword = async function(password){

    return await bcrypt.compare(password , this.password);

}

userSchema.methods.generateAccessToken = function()
{
    return jwt.sign({
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName,
            ageGroup: this.ageGroup
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRY
        }
    );
};



export const User = mongoose.model("User", userSchema);