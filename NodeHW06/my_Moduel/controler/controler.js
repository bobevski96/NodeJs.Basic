import {blogModel} from "../model/blog_model.js";

const blogModel= new blogModel;

class blogController {
   async allBlogs(){
    await blogModel.allBlogs()
   }

   async createBlog(){
    await blogModel.createBlog()
   }

   async editBlog(){
    await blogModel.editBlog()
   }
   
   async deleteBlog(){
    await blogModel.deleteBlog()
   }

}

export default blogController;
