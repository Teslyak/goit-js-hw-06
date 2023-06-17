function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  divControls: document.querySelector('#controls'),
  inputAmount: document.querySelector('div > input'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  divBoxes: document.querySelector('#boxes')
}
const min = Number(refs.inputAmount.min);
const max = parseInt(refs.inputAmount.max);
const step = +refs.inputAmount.step;


refs.buttonCreate.addEventListener('click', createBoxes);
refs.buttonDestroy.addEventListener('click', onBtnDestroy);
refs.inputAmount.addEventListener('input', onInputValue);

function onInputValue(event) {
  if (event.currentTarget.value < min || event.currentTarget.value > max) {
    alert(`Введіть будь ласка правильне значення в діапазоні від ${min} до ${max}`)
  }
};

function createBoxes(amount) {
  const size = 30;

  amount = refs.inputAmount.value;
  if (amount < min || amount > max) {
    alert(`Ваші значення min ${min} та max ${max} не відповідають ліміту`)
    return;
  } else {
    const arrBoxes = [];
    for (let i = 0; i < amount; i += step) {
      let reSize = size + i * 10;
      const sizeLimit = 70;
      const divItem = `<div style="width:${reSize >= sizeLimit ? sizeLimit : reSize}px; height:${reSize}px;
      background-color: ${getRandomRGBColor()}; " ></div> `;
      arrBoxes.push(divItem);
    };
    refs.divBoxes.insertAdjacentHTML("beforeend", arrBoxes.join(""));
  };
};

function onBtnDestroy() {
  refs.inputAmount.value = "";
  refs.divBoxes.innerHTML = "";
};

const getRandomRGBColor = () => {
  const red = Math.round(Math.random(0, 1) * 255);
  const green = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);
  return `rgb(${red}, ${green}, ${blue})`;

}





