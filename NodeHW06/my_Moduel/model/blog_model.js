import { writeFile, readFile, appendFile, pathDB } from "../fs-servise.js";
import { Blog } from "./blog_object.js";

const newBlog = Blog;
class blogModel {

  //Metod to get all blogs
  async getAll(pathDB) {
    const readedData = readFile(pathDB);
    const pardesData = JSON.parse(readedData);
    return pardesData;
  }
  //Metod for creating blog
  async createBlog(id, title, body, author, date, tags) {
    const readedData = readFile(pathDB);
    const pardesData = JSON.parse(readedData);

    const newBlog = newBlog(id, title, body, author, date, tags);
    pardesData.push(newBlog);
    await appendFile(pathDB, JSON.stringify(pardesData, null, 2));
  }
  // Metod for editing blog
  async editById(id) {
    const readedData = readFile(pathDB);
    const pardesData = JSON.parse(readedData);

    //Not sure this is the right way 
    const foundBlog = pardesData.find((blog) => blog.id === id);
    if (foundBlog) {
      foundBlog.title = title;
      foundBlog.body = body;
      foundBlog.tags = tags;
    } else if (!foundBlog) {
      return new Error(`Blog with that ID:${id} want not found `);
    }
    return foundBlog;
  }
  //Metod to delete a blog
  async deleteBlog(id){
    const readedData = readFile(pathDB);
    const pardesData = JSON.parse(readedData);
    
    const filterData = pardesData.find((blog)=> blog.id === id)
    
    for (let i=0; i<pardesData.lenght; i++){
        if(filterData.id === pardesData[i].id){
            pardesData.pop()
        }
        return pardesData
    }
    await appendFile(pathDB, JSON.stringify(pardesData, null, 2));
  }

  
}

export default blogModel;
