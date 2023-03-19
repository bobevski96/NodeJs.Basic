import express from "express";
import blogRouther from "./my_Moduel/blogRouther.js";
import newBlog from "./my_Moduel/model/blog_model.js";

const server = express();

server.use(express.json());
server.use("/routher",blogRouther)


server.get("/",(req,res)=>{
    res.send(`Defult roith :)`)
})
server.listen(3000,()=>{
    console.log(`Server at port: 3000`)
})