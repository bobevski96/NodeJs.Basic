import {v4 as randomId} from 'uuid';
import {EventEmitter} from "events"; 
import fs from "fs";
import path from "path"
import{pathToSave,newPath} from "./service.js"


// reading from studen.json
export const readFunc = (path)=>{
    const students = fs.readFileSync(newPath,{ encoding: "utf-8" });
    // console.log(students)
    return JSON.stringify(students);
};


//
export const newStudent=(studentFullname, studentEmail,studentPassword)=>{
    const student={
        id:randomId(),
        fullName:studentFullname,
        email: studentEmail,
        password : studentPassword
    }
    const students = fs.readFileSync('./students.json');
    students.push(student)
    fs.writeFileSync('../students.json',JSON.stringify(students))
    EventEmitter.email('runGreet',student.fullName)
}

// delete given ID
const deleteID = (IDinput)=>{
    // const students = fs.readFileSync(path);
    // return JSON.parse(students);
    // if (IDinput === students.id){
    //     students.pop()
    // }
}