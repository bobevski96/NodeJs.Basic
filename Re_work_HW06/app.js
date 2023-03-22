console.log(`Home work 06(re-work)`)
import express from "express";
import appRout from "./modules/router/routher.js"
import {pathText,pathDb,writeFile,readFile,appendFile,timeDate} from "./modules/fs-servise.js"


 





const app=express();
app.use(express.json());


app.use("/routher",appRout)

app.get("/",(req,res)=>{
    res.send("Defult rout")
})
app.use("*",(req,res)=>{
    res.redirect('/')
})
app.listen(3000,()=>{
    console.log(`Server is up at port: 3000`)
})