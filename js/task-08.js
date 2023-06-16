const refs = {
form: document.querySelector('.login-form')
}


refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    const emailValue = email.value.toLowerCase();
    const passwordValue = password.value;
    if (!emailValue || !passwordValue) {
        alert('Будь ласка заповніть всі поля');
    };
    const makeObjectFormData = {
        email: emailValue,
        password: passwordValue
    };
    event.currentTarget.reset();
    
};