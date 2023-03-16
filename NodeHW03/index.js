import {v4 as randomId} from 'uuid';//npm packed
import color from "colors";//  npm packed
import {myeventEmitter, pathToSave,newPath} from "./myModuls/service.js"; // Events and fs!
import {readFunc,newStudent} from "./myModuls/functions.js";//funtions




console.log('Home Work'.blue)

//To Write in freeting_log.txt
myeventEmitter.emit("runGreet","\nJoe");

//To write in students.json - bonus question, and the new sutend will be added in a new line :)
myeventEmitter.emit("runJson","Ace");
myeventEmitter.emit("runJson","Gale");
myeventEmitter.emit("runJson","Gjorge");
myeventEmitter.emit("runJson","Aneta");

// readFunc(pathToSave);
readFunc(newPath);
// function to create new student object and greet
newStudent("Alen","Joe@yahoo.com","123qwe")