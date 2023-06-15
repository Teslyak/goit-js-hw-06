let counterValue = 0;
const refs = {
    btnDecrm: document.querySelector('[data-action="decrement"]'),
    btnIncrm: document.querySelector('[data-action="increment"]'),
    spanCounterValue: document.querySelector('#value')
};

refs.btnDecrm.addEventListener('click' ,onButtonDecrement);
refs.btnIncrm.addEventListener('click', onButtonIncrement);

function onButtonDecrement() {
    counterValue -= 1;
    refs.spanCounterValue.textContent = counterValue;
};
function onButtonIncrement() {
    counterValue += 1;
    refs.spanCounterValue.textContent = counterValue;
    
};