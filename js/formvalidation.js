const contactForm = document.querySelector('.contact-form');
const emailContainer = document.querySelector('.email-container');
const emailInput = document.getElementById('email');
const errorMessageContainer = document.querySelector('.error-message');
const emailErrorMessage = 'Please enter email address in small letters.';

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
  }
});
