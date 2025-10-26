// JSON
let obj = { name: "Hazem", age: 25 };
let json = JSON.stringify(obj); // object → string
console.log(json);

let back = JSON.parse(json); // string → object
console.log(back);


// Asynchronous JS
setTimeout(() => console.log("After 2 sec"), 2000);
console.log("Start");
console.log("End");
