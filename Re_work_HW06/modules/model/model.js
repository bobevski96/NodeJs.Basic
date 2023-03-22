import {
  pathText,
  pathDb,
  writeFile,
  readFile,
  appendFile,
  timeDate,
} from "../fs-servise.js";
import { ObjectOrigin } from "../object-entity/model_origin.js";

class Modelclass {
  // Metod to get all data
  async getData(pathDb) {
    const readedData = readFile(pathDb);
    const pardesData = JSON.parse(readedData);
    return pardesData;
  }

  //Metod to create a new blog
  async creteBlog(title, body, author, tags) {
    const readedData = readFile(pathDb);
    const parsedData = JSON.stringify(readedData);

    const modelOrigin = new ObjectOrigin(title, body, author, tags);
    parsedData.push(modelOrigin);
    await writeFile(pathDb, JSON.stringify(parsedData, null, 2));

    //Another metod just to take note to other_info.txt
    const otherInfo = `Blog with title ${modelOrigin.title} was added at : ${timeDate}`;
    const other_info2 = JSON.stringify(otherInfo);
    await appendFile(pathText, `\n ${other_info2}`);
  }

  //Metod to change by ID
  async changeBlog(id) {
    const readedData = readFile(pathDb);
    const parsedData = JSON.stringify(readedData);

    const foundBlog = parsedData.find((blog) => blog.id === id);
    return foundBlog;
    if (foundBlog === undefined) {
      throw new Error(`Blog with id: ${id} was not found.`);
    }
  }

  //Delete blog
  async deleteBlog(id) {
    const readedData = readFile(pathDb);
    const parsedData = JSON.stringify(readedData);
    const filterdBlog = parsedData.filter((blog) => blog.id !== id);
    if (filterdBlog.length === parsedData.length) {
      return { message: "That blog was not found" };
    }
    await writeFile(pathDb, JSON.stringify(filterdBlog, null, 2));
  }
}
//  Test and example (testing - will new object will be created , convert to string and added do db/json)
// export const clasTest = new ObjectOrigin();
// clasTest.title = "Second dummy blog-test",
// clasTest.body = "Practise, basic node, and it is fun",
// clasTest.author = "jon doe";
// clasTest.tags = "Hello, Aneta and Dzorc";

// export const dataAsd = JSON.stringify(clasTest,null,2);
// const testPart3 =`Blog with title: ${clasTest.title} was aded at : ${timeDate}`
// const testPart4 = JSON.stringify(testPart3,null,2)

// export const writeDumy = (path, dataAsd) => {
//   appendFile(pathDb, dataAsd);
//   appendFile(pathText, `\n${testPart4}`);
// };

export default Modelclass;
