console.log(`Hello`);

import express from "express";
import {writeFS,readFS,appendFS} from "./my_Modules/fs-servise.js"
import productsRouter from "./my_Modules/router.js"

    // API test extenzita ne mi rabote, ne znam dali rabote,  :/

const server=express()
server.use(express.json());

server.use("/product",(productsRouter))
server.get("/",(req,res)=>{
    res.send(`We hit def routh`)
})
server.get("*",(req,res)=>{
res.send(`That routh dosent exsist  {ERROR: 404}`)
res.status(404);
})

server.listen(3000,()=>{
    console.log(`Server is runing at port : 3000 on localhost`)
})