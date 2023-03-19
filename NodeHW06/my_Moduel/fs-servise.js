import fsPromises from "fs/promises";
import path from "path"

export const pathDB = path.join("my_Moduel/data_base/db.json")
export const writeFile = async (path, data) => {
    await fsPromises.writeFile(path, data)
};

export const readFile = async (path) => {
    const content = await fsPromises.readFile(path, {encoding: "utf-8"});

    return content
};


export const appendFile = async (path, data) => {
    await fsPromises.appendFile(path, data)
};