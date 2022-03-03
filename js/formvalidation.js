const emailErrorMessage = 'Please enter email address in small letters.';
const contactForm = document.querySelector('.contact-form');
const emailContainer = document.querySelector('.email-container');
const emailInput = document.getElementById('email');
const errorMessageContainer = document.querySelector('.error-message');
const formElement = document.querySelectorAll('textarea.labeled-element, .labeled-element > input');
let formData = {'name': '', 'email': '', 'message': ''};
if(localStorage.getItem('formdata') !== null) {
  formData = JSON.parse(localStorage.getItem('formdata'));
} 

const validateEmail = () => {
  const lowercaseEmail = emailInput.value.toLowerCase();
  if (lowercaseEmail !== emailInput.value) {
    emailContainer.classList.add('email-error');
    emailInput.focus();
    errorMessageContainer.textContent = emailErrorMessage;
    return false;
  }
  emailContainer.classList.remove('email-error');
  return true;
};

contactForm.addEventListener('submit', (event) => {
  if (!validateEmail()) {
    event.preventDefault();
  } else {
    localStorage.removeItem('formdata');
  }
});

formElement.forEach((formItem) => {  
  formItem.value = formData[formItem.name];
  formItem.addEventListener('input', (e) => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('formdata', JSON.stringify(formData));
  });
});
