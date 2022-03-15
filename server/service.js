import fs from "fs";
import config from "./config.js";
import { join, extname } from "path";
import fsPromises from "fs/promises";

const {
  dir: { publicDirectory },
} = config;

export class Service {
  createFileStream(fileName) {
    return fs.createReadStream(fileName);
  }

  async getFileInfo(file) {
    const fullFilePath = join(publicDirectory, file); // file = home/index.html
    await fsPromises.access(fullFilePath); //valida se o caminho existe, se não existir lança um erro
    const fileType = extname(fullFilePath);
    return {
      type: fileType,
      name: fullFilePath,
    };
  }

  async getFileStream(fileName) {
    const { name, type } = await this.getFileInfo(fileName);
    return {
      stream: this.createFileStream(name),
      type,
    };
  }
}
