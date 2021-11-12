const form = document.getElementById('contact-form');
const emailError = document.querySelector('span.error');
const isEmailValid = (email) => {
  const regex = /^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
  return regex.test(email.value);
};

const checkEmail = (email) => {
  // console.log(isEmailValid(email));
  let valid = true;
  if (!isEmailValid(email)) {
    valid = false;
  }
  return valid;
};

form.addEventListener('submit', (event) => {
  // prevent the form from submitting
  event.preventDefault();

  const { email } = form.elements;

  if (!checkEmail(email)) {
    email.setCustomValidity(
      'Please enter a valid email address and in lowercase letters.'
    );
    emailError.textContent =
      'Please enter a valid email address and in lowercase letters.';
  } else {
    email.setCustomValidity('');
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
    form.submit();
  }
});
