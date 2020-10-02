"use strict";
if (window.localStorage) {
  setVars();
} else {
  // No localStorage support
}
function setVars() {
  const dims = document.querySelector(".game-size");
  console.log(dims.innerHTML)
  const colors_no = document.querySelector('.color-number');
  const start = document.querySelector('#start-btn');
  let selected = document.querySelector('.game-size .selected');
  localStorage.setItem('width', 10);
  localStorage.setItem('height', 12);
  localStorage.setItem('colors_no', 7);
  dims.addEventListener('click', (e) => {
    const pressed = e.target;
    selected.classList.remove("selected");
    pressed.classList.add("selected");
    selected = pressed;
    const star_pos = pressed.innerText.indexOf('*');
    let width = Number(pressed.innerText.substr(0, star_pos)),
      height = Number(pressed.innerText.substr(star_pos + 1));
    localStorage.setItem('width', width);
    localStorage.setItem('height', height);

  });
  localStorage.setItem('colors_no', 7);
  colors_no.addEventListener('keyup', (e) => {
    localStorage.setItem('colors_no', colors_no.value);
  })

  start.addEventListener('click', (e) => {
    location.href = 'game.html';
  })
}