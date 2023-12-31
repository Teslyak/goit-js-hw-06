function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  button: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  span: document.querySelector('.color')
}
refs.button.addEventListener('click', onclickBtnChangeColor);

function onclickBtnChangeColor() {
  let randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.span.textContent = randomColor;

}