import express from "express";

const app = express();
const port = 3000;


app.set("view engine", "ejs");


app.get("/", (req, res) => {
    const today = new Date();
    const day = today.toLocaleDateString();
    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    let nn = 6500000;
    let t = today.toLocaleTimeString();


    res.render("index.ejs", { formattedDate, t, day });
});




app.listen(port, () => { });