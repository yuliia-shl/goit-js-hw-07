function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const buttonCreateEl = document.querySelector("button[data-create]");
const buttonDestroyEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  boxesEl.innerHTML = "";
  let size = 30;
  const boxes = [];

  for(let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  };
  
  boxesEl.append(...boxes);
}

buttonCreateEl.addEventListener("click", () => {
  const amount = inputEl.value;
  if (amount <= 100) {
    createBoxes(amount);
    inputEl.value = "";
  };
})

buttonDestroyEl.addEventListener("click", () => {
  boxesEl.innerHTML = "";
})
