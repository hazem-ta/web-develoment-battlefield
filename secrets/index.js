//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const password = "123456";

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => { res.sendFile(__dirname + "/public/index.html") });

app.post("/check", (req, res) => {
    if (req.body["password"] === password) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.send(`<h1>are you a mindless person </h1>
            <h2>this password is wrong</h2> 
            <h2>the right password is <span style="font-size:50px; color:blue">${password}</span> </h2>
            <meta http-equiv="refresh" content="4;url=/" />`)
    }

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
