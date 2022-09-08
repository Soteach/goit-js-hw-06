function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorChangeBtn = document.querySelector('.change-color');
const color = document.querySelector('.color');

colorChangeBtn.addEventListener('click', onBtnColorChange);

function onBtnColorChange() {
  color.textContent = getRandomHexColor();
  document.body.style.backgroundColor = color.textContent;
};