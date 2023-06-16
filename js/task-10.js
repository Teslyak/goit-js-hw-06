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
refs.inputAmount.addEventListener('input', onInputAmount);
refs.buttonCreate.addEventListener('click', onClickBtnCreate);
refs.buttonDestroy.addEventListener('click', onClickBtnDestroy)
function onInputAmount(event) {
  const inputValue = event.currentTarget.value;
  console.log(inputValue);
};

function onClickBtnCreate() {
  
};

function onClickBtnDestroy() {

};