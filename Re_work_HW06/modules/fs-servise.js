import fsPromises from "fs/promises";
import path from "path"

export let pathDb = path.join('modules/db/data_base.json')
export let pathText = path.join("modules/db/other_info.txt")
export let timeDate = new Date().toDateString()


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