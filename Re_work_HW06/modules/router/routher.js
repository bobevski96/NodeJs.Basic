import express from "express";
import {BlogControll} from "../controler/controller.js"

const appRout = express.Router();


appRout.get("/",(req,res)=>{
    res.send(BlogControll.getData())
})

appRout.post("/",async(req,res)=>{
    res.send(await BlogControll.createBlog)
})

appRout.patch("/",async(req,res)=>{
    const id =req.params.id
    res.send(await BlogControll.editBlog(id))
})
appRout.delete("/",async(req,res)=>{
    const id =req.params.id
    res.send(await BlogControll.deleteBlog(id))
})

export default appRout;