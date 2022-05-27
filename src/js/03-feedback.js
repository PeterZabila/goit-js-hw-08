import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textArea: document.querySelector('textarea'),
    btn: document.querySelector('button'),
};

const formInputHandle = function(e) {
    const formData = {};
    formData.email = e.currentTarget.elements.email.value;
    formData.message = e.currentTarget.elements.message.value;
    const formDataforForLS = JSON.stringify(formData);

    localStorage.setItem('feedback-form-state', formDataforForLS);
    console.log(formData); 
};

const formSubmitHandle = function(e) {
    e.preventDefault();
        e.currentTarget.elements.email.value = "";
        e.currentTarget.elements.message.value = "";
    localStorage.removeItem('feedback-form-state');
};

refs.form.addEventListener('input', formInputHandle);
refs.form.addEventListener('submit', formSubmitHandle);