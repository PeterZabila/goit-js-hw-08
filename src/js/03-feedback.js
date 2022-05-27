import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textArea: document.querySelector('textarea'),
};

const formInputHandle = function(e) {
    formData.email = refs.input.value;
    formData.message = refs.textArea.value;
    const formDataforForLS = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formDataforForLS);
    console.log(formData); 
};

const formSubmitHandle = function(e) {
    e.preventDefault();
        e.currentTarget.elements.email.value = "";
        e.currentTarget.elements.message.value = "";
    localStorage.removeItem(STORAGE_KEY);
};

refs.form.addEventListener('input', throttle(formInputHandle, 500));
refs.form.addEventListener('submit', formSubmitHandle);

// const onRefresh = function(e) {
//     if(localStorage.getItem(STORAGE_KEY)) {
//         const rawData = localStorage.getItem(STORAGE_KEY);
//         const parsedJson = JSON.parse(rawData);

//         refs.input.value = parsedJson.email;
//         refs.textArea.value = parsedJson.message;
//     }
// };

// refs.form.addEventListener('input', onRefresh);