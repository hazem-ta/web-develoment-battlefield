import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

// we don't need body-parser becuase express has it buil-in since v4.16 
 


const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;
var bandName = "";

app.use(express.urlencoded({ extended: true }));


function bandNameGen(req, res, next) {
  bandName = req.body["street"] + req.body["pet"];
  next();
};



app.use(bandNameGen)


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", (req, res) => {
  res.send(`<h1>The Name is </h1><h2>${bandName}</h2><h5>the name is the primagean</h5>`)
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
