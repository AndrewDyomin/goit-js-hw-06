const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener("blur", (event) => {
    const entered = inputEl.value.length;
    const target = inputEl.getAttribute('data-length');

    if (entered == target) {
        inputEl.className = 'valid';
        
    } else {
        inputEl.className = 'invalid';
        
    };
  });

