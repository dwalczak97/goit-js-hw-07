function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.textContent = i + 1;
    fragment.appendChild(box);
    boxSize += 10;
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount < 1);
  else if (amount >= 100);
  else {
    createBoxes(amount);
    input.value = "";
  }
});
destroyBtn.addEventListener("click", destroyBoxes);
