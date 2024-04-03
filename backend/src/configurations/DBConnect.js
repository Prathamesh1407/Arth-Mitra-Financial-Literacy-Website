import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

const DBConnect = async () => {
    try {
        
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL);

        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}\n`);

    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
}

export default DBConnect