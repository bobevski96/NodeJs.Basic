import {v4 as randomId} from 'uuid';
import {EventEmitter} from "events"; 
import fs from "fs";
import path from "path"


// Part 1
export let pathToSave = path.join("./greeting_log.txt")

fs.writeFileSync(pathToSave,"Hello")


export const myeventEmitter = new EventEmitter();

myeventEmitter.on("runGreet",(studentName)=>{
    console.log(`Greeting from ${studentName}`)
    fs.appendFileSync(pathToSave,studentName)
})

//Bonus part of the home work
export let newPath = path.join("./students.json");

// let newStudent;
// myeventEmitter.on("runJson",(studentName,id)=>{
//      newStudent =`${studentName} with an ID : ${randomId()}`
//     fs.appendFileSync(newPath,`\n ${newStudent}`)
// });



   


