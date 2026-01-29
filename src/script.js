const pokemon = document.getElementById("pokemon");

let posX = 0;
let posY = 0;

const offsetX = 2; // distance from cursor (right)
const offsetY = 2; // distance from cursor (down)

const speed = 0.25;

document.addEventListener("mousemove", (e) => {
  posX += (e.clientX - posX + offsetX) * 0.1;
  posY += (e.clientY - posY + offsetY) * 0.1;

  pokemon.style.left = posX + "px";
  pokemon.style.top = posY + "px";
});