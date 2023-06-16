function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputAmount: document.querySelector('[type=number]'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  divBoxes: document.querySelector('#boxes')

}

refs.inputAmount.addEventListener('submit', onInputAmount);

function onInputAmount() {
  
};



