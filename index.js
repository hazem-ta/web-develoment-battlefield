const projects = [
  { name: "Dice Game", path: "../games/dicee-game/dicee.html", img: "../games/dicee-game/images/dice-game-logo.png" },
  { name: "Drum Kit Game", path: "../games/drum-kit-game/index.html", img: "../games/drum-kit-game/images/game-logo.png" },
  { name: "Simon Game", path: "../games/simon-game/index.html", img: "../games/simon-game/img/game-logo.png" },
  { name: "Dating App", path: "../websites/dating-app-landpage/index.html", img: "../websites/dating-app-landpage/images/website-logo.png" },
  { name: "Move it", path:"../websites/shipping-company-wesite/index.html", img:"../websites/shipping-company-wesite/images/websit-logo.png" },
];

const container = document.getElementById("projects-container");

projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name} preview">
    <h2>${p.name}</h2>
    <a href="${p.path}">Live Preveiw</a>
  `;
  container.appendChild(card);
});
