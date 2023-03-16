
import fs from "fs";
import path, { join } from "path";


//  fs.writeFileSync("Homework 02 in Basic Node", "Hello from node js");
//  fs.appendFileSync("Homework 02 in Basic Node","FINISHED");


export let pathh = ("homework.txt");

// Write funck
export const writeFile = (path,data) => {
    fs.writeFileSync(path, data);
};
//Apend func
export const apendFile = (path,data) => {
    fs.appendFileSync(path, data);
};
//Read func
export const readFile = (path) => {
    let content = fs.readFileSync(path, {encoding: "utf-8"});
    console.log(content);
}


