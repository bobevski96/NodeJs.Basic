import express from "express";
import { v4 as randomId } from "uuid";
import { writeFile, readFile, appendFile, pathDB } from "./fs-servise.js";

//Test
// appendFile(pathDB,"Does this work ?")

const blogRouther = express.Router();

//To view blog posts
blogRouther.get("/", (req, res) => {
  res.send(`Routher end point :)`);
});

// To create a new blog post.
blogRouther.post("/", async (req, res) => {
  const blogs = await readFile(pathDB);
  const allBlogs = JSON.parse(blogs);



  await appendFile(pathDB, allBlogs);
  res.status(201).send({ message: `Blog with title: ${a} was added` });
});

export default blogRouther;
