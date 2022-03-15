// normalizando __dirname nos ECMAScript modules
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const currentDir = dirname(fileURLToPath(import.meta.url)); // igual a __dirname

const rootDir = join(currentDir, "../");
const audioDirectory = join(rootDir, "audio");
const publicDirectory = join(rootDir, "public");
const songsDirectory = join(audioDirectory, "songs");
const songsFxDirectory = join(audioDirectory, "fx");

export default {
  port: process.env.PORT || 3000,
  dir: {
    rootDir,
    audioDirectory,
    publicDirectory,
    songsDirectory,
    songsFxDirectory,
  },
  pages: {
    homeHTML: "home/index.html",
    controllerHTML: "controller/index.html",
  },
  location: {
    home: "/home",
  },
  constants: {
    CONTENT_TYPE: {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
    },
  },
};
