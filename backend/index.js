import dotenv from "dotenv"
import DBConnect from "./src/configurations/DBConnect.js";
import {app} from "./app.js"

dotenv.config()

const port = process.env.PORT || 8000;
DBConnect()
.then( ()=>{
    app.on("errror", (error) => {
        console.log("app on ERROR : ", error);
        throw error
    })
})
.then(()=>{
    app.listen(port , ()=>{
        console.log(`Server started and running on port: ${port}\n\n\n`);
    })

})
.catch((err)=>{console.log(`DB Connection error :- ${err}`)})