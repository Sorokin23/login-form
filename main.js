function signInButton (formElement, type, message) {
    const messageElement = formElement.querySelector ('.form_message');

    messageElement.textContent = message;
    messageElement.classList.remove ('form_message-error');
    messageElement.classList.add (`form_message-${type}`);
}

function registerButton (formElement, type, message) {
    const messageElement2 = formElement.querySelector ('.form_message');

    messageElement2.textContent = message;
    messageElement2.classList.remove ('form_message-error');
    messageElement2.classList.add (`form_message-${type}`);
}

document.addEventListener ('DOMContentLoaded',() => {
    const loginForm = document.querySelector('#login');
    const createAccountForm = document.querySelector('#createAccount');


    document.querySelector('#linkCreateAccount').addEventListener('click', () =>{
        loginForm.classList.add('form-hidden');
        createAccountForm.classList.remove('form-hidden');
    });

    document.querySelector('#linkLogin').addEventListener('click', () =>{
        loginForm.classList.remove('form-hidden');
        createAccountForm.classList.add('form-hidden');
    });

    loginForm.addEventListener('submit', () => {
        signInButton(loginForm, 'error', 'Invalid username/password combination!');
    })

    createAccountForm.addEventListener('submit', () => {
        registerButton(createAccountForm, 'error', 'New registrations is unavailable right now.');
    })
});