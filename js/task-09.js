const buttonEl = document.querySelector('.change-color');
const outputColorEl = document.querySelector('.color');

buttonEl.addEventListener('click', () => {
    const genColor = getRandomHexColor();
    document.body.style.backgroundColor = genColor;
    outputColorEl.textContent = genColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
};

