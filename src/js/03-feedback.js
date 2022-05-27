import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textArea: document.querySelector('textarea'),
};

const formInputHandle = function() {
    formData.email = refs.input.value;
    formData.message = refs.textArea.value;
        const formDataForLS = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formDataForLS);
    console.log(formData); 
};

const formSubmitHandle = function(e) {
    e.preventDefault();
        e.currentTarget.elements.email.value = "";
        e.currentTarget.elements.message.value = "";
    localStorage.removeItem(STORAGE_KEY);
};

const getSavedValue = function() {
    if(localStorage.getItem(STORAGE_KEY)) {
        const one = localStorage.getItem(STORAGE_KEY);
        const two = JSON.parse(one);
        console.log(two);
        refs.input.value = two.email;
        refs.textArea.value = two.message;
    } else {
        refs.input.value = "";
        refs.textArea.value = "";
    }
}; 


window.addEventListener('load', getSavedValue);
refs.form.addEventListener('input', throttle(formInputHandle, 500));
refs.form.addEventListener('submit', formSubmitHandle);