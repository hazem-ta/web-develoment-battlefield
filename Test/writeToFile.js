const fs = require("fs");

var data = "Test text for try to work with files in node";

fs.writeFile("exaa.txt" , data, (err) => {
    if (err) throw err;
    console.log("Done");
});

