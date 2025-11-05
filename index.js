const base = location.hostname === "localhost"
  ? "/"
  : "https://hazem-ta.github.io/web-development-camp/";

const projects = [
  { name: "Dice Game", path: base + "games/dicee-game/dicee.html", img: base + "games/dicee-game/images/dice-game-logo.png" },
  { name: "Drum Kit Game", path: base + "games/drum-kit-game/index.html", img: base + "games/drum-kit-game/images/game-logo.png" },
  { name: "Simon Game", path: base + "games/simon-game/index.html", img: base + "games/simon-game/img/game-logo.png" },
  { name: "Dating App", path: base + "websites/dating-app-landpage/index.html", img: base + "websites/dating-app-landpage/images/website-logo.png" },
  { name: "Move it", path: base + "websites/shipping-company-website/index.html", img: base + "websites/shipping-company-website/images/websit-logo.png" },
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
