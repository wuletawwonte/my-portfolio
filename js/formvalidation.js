const contactForm = document.querySelector('.contact-form');
const emailContainer = document.querySelector('.email-container');
const emailInput = document.getElementById('email');

const validateEmail = () => {
  const lowercaseEmail = emailInput.value.toLowerCase();
  if (lowercaseEmail !== emailInput.value) {
    emailContainer.classList.add('email-error');
    emailInput.focus();
    return false;
  } else {
    emailContainer.classList.remove('email-error');
    return true;
  }
};

contactForm.addEventListener('submit', (event) => {
  if (!validateEmail()) {
    event.preventDefault();
  }
});
