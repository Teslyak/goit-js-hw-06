const refs = {
    input: document.querySelector('#name-input'),
    spanTitle: document.querySelector('#name-output') 
};

refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {
    refs.spanTitle.textContent = event.currentTarget.value.trim();
    if (!event.currentTarget.value) {
        refs.spanTitle.textContent = "Anonymous"
    };
    
};