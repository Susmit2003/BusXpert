import express from "express"
import busAdmin from "./routes/busAdmin.routes.js"
import dotenv from "dotenv";
import user from "./routes/user.routes.js"
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDb.js"
dotenv.config();
const app =express()



const port = process.env.PORT


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api/user",user)






app.get("/",(req,res)=>{
    res.send("ser")
})

app.use("/api/busAdmin",busAdmin)


app.listen(port,()=>{
    console.log("server is running at port number 5000 ")
    connectMongoDB()
})