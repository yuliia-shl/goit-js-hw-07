function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const spanEL = document.querySelector(".color");

buttonEl.addEventListener("click", () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanEL.textContent = getRandomHexColor();
});