import express from "express"
import busAdmin from "./routes/busAdmin.routes.js"

import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDb.js";
dotenv.config();
const app =express()

const port=process.env.port
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("ser")
})

app.use("/api/busAdmin",busAdmin)

connectMongoDB()
app.listen(port,()=>{
    console.log(`server is running at port number ${port}`)
})