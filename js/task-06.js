const refs = {
    input: document.querySelector('#validation-input')
   
};
const inputLength = refs.input.getAttribute('data-length')
refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.remove('invalid'); 
    if (Number(event.currentTarget.value.trim().length) === Number(inputLength)) {
        event.currentTarget.classList.add('valid');  
    } else event.currentTarget.classList.add('invalid');
};