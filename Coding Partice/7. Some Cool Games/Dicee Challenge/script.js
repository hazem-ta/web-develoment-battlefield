let randomNumber1 = Math.floor(Math.random() * 6)+1; // genreate number form 1 to 6
let randomNumber2 = Math.floor(Math.random() * 6)+1;

let randomDice1 = "images/dice" + randomNumber1 + ".png"; // choice random dice image
let randomDice2 = "images/dice" + randomNumber2 + ".png";


let img01 = document.querySelectorAll("img")[0];
img01.setAttribute("src", randomDice1); // update the dice image


let img02 = document.querySelectorAll("img")[1];
img02.setAttribute("src", randomDice2);



// determaie the winner
if (randomNumber1 > randomNumber2){
    document.getElementById("the-title").textContent = "🚩 Player 1 is the winner";
}

if (randomNumber1 < randomNumber2) {
    document.getElementById("the-title").textContent = "Player 2 is the winner 🚩";
} 

if (randomNumber1 == randomNumber2) {
    document.getElementById("the-title").textContent = "تعادل";
}













// " for testing purpose " 
// let n = 100;
// let maxx = 0;
// while (n--) {
//   let randomNumber = Math.floor(Math.random() * 7);
//   console.log(randomNumber);
//   if (randomNumber > maxx) {
//     maxx = randomNumber;
//   }
// }
// console.log("----------------------------------------------------------");

// console.log(maxx);
