import express, { response } from "express";
import {writeFS,readFS,appendFS,dbProducstPath} from "./fs-servise.js";
import {v4 as uuid} from "uuid";

writeFS(dbProducstPath,"Hello.json")


const productsRouter = express.Router();

//Create product
productsRouter.post("/",(req,res)=>{
    const content =readFS(dbProducstPath) 
    const product=JSON.parse(content)
    const  newProduct = {
        id:uuid(),
        name:bodyParser.name,
        price:parseInt(body.price),
        rating:body.rate,
        description:body.description,
        category:body.category,
        isInStock: true || false
        }

    product.push(newProduct)
    appendFS(dbProducstPath,JSON.stringify(product,null,2));
    
})

//read
productsRouter.get("/",(req,res)=>{
    const content = readFS(dbProducstPath)
    res.send(`The content of the products : ${content}`)
})

//Update product
productsRouter.patch("/",(req,res)=>{
 const id = req.params.id;

 const content = readFS(dbProducstPath) 
 const product=JSON.parse(content)
 
 const newChanges =product.map((product)=>{
    if(product.id === id){
        product.isInStock =true
        return product
    }
    return newChanges
 })
 writeFS(dbProducstPath,newChanges);
 res.sendStatus(200);
})

//Delete product
productsRouter.delete("/",(req,res)=>{
    const id = req.params.id;
   
    const content = readFS(dbProducstPath) 
    const product=JSON.parse(content)
    
   const newChanges =product.filter((product)=>product.id !==id)
   
  writeFS(dbProducstPath,JSON.stringify(newChanges));
  res.sendStatus(200);
})


export default productsRouter;