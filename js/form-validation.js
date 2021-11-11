/* const form = document.getElementById('contact-form');

const validateEmail = (email) => {
  var emailRegex = /^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
  if (!emailRegex.test(email)) {
    return false;
  } else {
    return true;
  }
}; */
/* form.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();

  const email = form.elements['email'];
  if (validateEmail(email)) {
    email.setCustomValidity(
      'Please enter a valid email address and in lowercase letters.'
    );

    //display error message here
  } else {
    email.setCustomValidity('');
    form.submit();
  }
}); */

// const form = document.getElementById('contact-form');
/* form.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();
});

const emailEl = document.querySelector('#email');
form.addEventListener('submit', (event) => {
  // prevent the form from submitting
  event.preventDefault();
});
const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}; */

/* const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
    showError(emailEl, 'Email is not valid.');
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
}; */
