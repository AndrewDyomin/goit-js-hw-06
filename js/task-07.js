const textEl = document.querySelector('#text');
const controlEl = document.querySelector('#font-size-control');

const fontSizeChange = () => {
    textEl.style.fontSize = `${controlEl.value}px`;
  };

  controlEl.addEventListener("input", fontSizeChange);