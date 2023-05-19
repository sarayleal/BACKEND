const fs = require("fs");

const { XMLParser } = require("fast-xml-parser");

const parser = new XMLParser();

fs.readFile("books.xml", "UTF-8", (error, data) => {
    let parseData;
    if (error) {
      console.log(error);
    } else {
      parseData = parser.parse(data);
      readConsole(parseData);
    }
  });

  fs.readFile("books.xml", "UTF-8", (error, data) => {
    let parseData;
    if (error) {
      console.log(error);
    } else {
      parseData = parser.parse(data);
      readConsole(parseData);
    }
  });  