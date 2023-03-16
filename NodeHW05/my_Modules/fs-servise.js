import fs from "fs";
import path from "path";

export let dbProducstPath ="my_Modules/data_base/product.json";

export const writeFS=(path,data)=>{
 fs.writeFileSync(dbProducstPath,"products");
}


export const readFS=(path)=>{
    const content = fs.readFileSync(path, {encoding: "utf-8"});
    console.log(content)
    return content
}

export const appendFS=(path,data)=>{
    fs.appendFileSync(path,data)
}