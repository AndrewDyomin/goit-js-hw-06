let counterValue = 0;

const valueEl = document.querySelector('#value');

const wrap_button = {
    sub: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
};

let increment = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

let decrement = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

wrap_button.sub.addEventListener('click', increment);
wrap_button.add.addEventListener('click', decrement);