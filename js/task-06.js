const refs = {
    input: document.querySelector('#validation-input')
   
};
const inputLength = refs.input.getAttribute('data-length')
refs.input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    refs.input.classList.remove('valid');
    refs.input.classList.remove('invalid'); 
    if (Number(refs.input.value.length) === Number(inputLength)) {
        refs.input.classList.toggle('valid');  
    } else refs.input.classList.toggle('invalid');
} 