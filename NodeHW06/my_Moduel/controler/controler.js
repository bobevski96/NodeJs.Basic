import {blogModel} from "../model/blog_model.js";

const blogModel= new blogModel;

class blogController {
   async allBlogs(){
    await blogModel.allBlogs()
   }

   async createBlog(id, title, body, author, date, tags){
    await blogModel.createBlog(id, title, body, author, date, tags)
   }

   async editBlog(id){
    await blogModel.editBlog(id)
   }
   
   async deleteBlog(id){
    await blogModel.deleteBlog(id)
   }

}

export default blogController;
