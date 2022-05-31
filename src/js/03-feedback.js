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
    // console.log(formData); 
};

const formSubmitHandle = function(e) {
    e.preventDefault();
        e.currentTarget.elements.email.value = "";
        e.currentTarget.elements.message.value = "";
    localStorage.removeItem(STORAGE_KEY);
};

const getSavedValue = function() {
    if(localStorage.getItem(STORAGE_KEY)) {
        const currentLocalData = localStorage.getItem(STORAGE_KEY);
        const currentLocalDataParse = JSON.parse(currentLocalData);
        refs.input.value = currentLocalDataParse.email;
        refs.textArea.value = currentLocalDataParse.message;
    } else {
        refs.input.value = "";
        refs.textArea.value = "";
    }
}; 


window.addEventListener('load', getSavedValue);
refs.form.addEventListener('input', throttle(formInputHandle, 500));
refs.form.addEventListener('submit', formSubmitHandle);


// // VARIANT 1

// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';
// const formData = {};

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     input: document.querySelector('input'),
//     textArea: document.querySelector('textarea'),
// };

// function formSubmitHandle(e) {
//     e.preventDefault();
//         e.currentTarget.elements.email.value = "";
//         e.currentTarget.elements.message.value = "";
//     localStorage.removeItem(STORAGE_KEY);
// };

// function anyInputHandler(e) {
//     if(e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA"){
//         formData[e.target.name] = e.target.value;
//             const formDataforForLS = JSON.stringify(formData);
//         localStorage.setItem(STORAGE_KEY, formDataforForLS);
//     }
// };

// function onRefreshHandle() {
//     const objFromLS = JSON.parse(localStorage.getItem(STORAGE_KEY));
//         Object.keys(objFromLS).map(name => {
//            const elFromDom = refs.form.querySelector(`[name=${name}]`);
//            elFromDom.value = objFromLS[name];
//         })
// }

// refs.form.addEventListener('submit', formSubmitHandle);
// addEventListener('load', onRefreshHandle)
// refs.form.addEventListener('input', throttle(anyInputHandler, 500));



// const onRefresh = function(e) {
//     if(localStorage.getItem(STORAGE_KEY)) {
//         const rawData = localStorage.getItem(STORAGE_KEY);
//         const parsedJson = JSON.parse(rawData);

//         refs.input.value = parsedJson.email;
//         refs.textArea.value = parsedJson.message;
//     }
// };

// refs.form.addEventListener('input', onRefresh);