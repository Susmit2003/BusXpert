import express from "express"
import dotenv from "dotenv";
dotenv.config();
const app =express()

const port=process.env.port
app.use(express.json());
app.use(express.urlencoded({extended:true}))






app.listen(port,()=>{
    console.log("server is running at port number 5000 ")

})