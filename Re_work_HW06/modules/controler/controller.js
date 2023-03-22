import Modelclass from "../model/model.js"
const blogCnt= new Modelclass()

export class BlogControll{
    async getData(){
        const allData = await  blogCnt.getData()
        return allData
    }

    async createBlog(title, body, author, tags){
       await blogCnt.createBlog(title, body, author, tags)
    }

    async editBlog(id){
        const editBlogId = await blogCnt.editBlogId(id)
        return editBlogId
    }

    async deleteBlog(id){
        const deleteBlogId = await blogCnt.deleteBlogId(id)
        return deleteBlogId
    }

}

