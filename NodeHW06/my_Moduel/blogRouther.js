import express from "express";
import { v4 as randomId } from "uuid";
import { writeFile, readFile, appendFile, pathDB } from "./fs-servise.js";

//Test
// appendFile(pathDB,"Does this work ?")

const blogRouther = express.Router();
app.use(express.json());
//To view blog posts
blogRouther.get("/", (req, res) => {
  res.send(`Routher end point :)`);
});

import {blogController} from "./controler/controler.js";
const blog = new blogController;


blogRouther.get("/", async (req, res) => {
  res.send(blog.allBlogs)
  res.status(200)
});

blogRouther.delete("id",async ( req,res) => {
  const id = req.params=id;
  res.send(blog.deleteBlog(id))
  res.status(200)
})

blogRouther.post("/",async(req,res)=>{
   const body = req.body
  res.send(blog.createBlog(body.id, body.title, body.body,body.author, body.date, body.tags))

})


export default blogRouther;
