/* eslint no-console: ["error", { allow: ["log"] }] */

import fs from "fs";

const FileWriter = {};

FileWriter.writeFile = (outputFile, content, isVerbose = true) => {
  fs.writeFile(outputFile, content, "", (err) => {
    if (err) {
      throw err;
    }

    // success case, the file was saved
    if (isVerbose) {
      console.log(`${outputFile} saved`);
    }
  });
};

export default FileWriter;
