import express from "express";

const app = express();
const port = 3000;



function logger(req, res, next) {
  console.log("The request method: "+req.method);
  console.log("The request URL: "+req.url);
  next();
}


app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/some-route", (req, res) => {
  res.send("dscsdcsdcsdcscsdcdscdsc");
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
