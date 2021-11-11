/*const form = document.getElementById('contact-form');

const validateEmail = (email) => {
  var emailRegex = /^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
  if (!emailRegex.test(email)) {
    return false;
  } else {
    return true;
  }
};
form.addEventListener('submit', (event) => {
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
});*/

//const form = document.getElementById('contact-form');
/*form.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();
});*/
const form = document.getElementById('contact-form');
const emailEl = document.querySelector('email');
const emailError = document.querySelector('span.error');
console.log(emailError);
form.addEventListener('submit', (event) => {
  // prevent the form from submitting
  event.preventDefault();

  const email = form.elements['email'];

  if(!checkEmail(email)){
    email.setCustomValidity(
      'Please enter a valid email address and in lowercase letters.'
    );
    emailError.textContent = "Please enter a valid email address and in lowercase letters.";
  } else {
     email.setCustomValidity('');
     emailError.textContent = ''; // Reset the content of the message
     emailError.className = 'error'; // Reset the visual state of the message
     form.submit();
  }
  console.log(email.checkValidity());
});
const isEmailValid = (email) => {
  const regex = /^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
  return regex.test(email.value);
};

const checkEmail = (email) => {
  //console.log(isEmailValid(email));
  let valid = true;
  if (!isEmailValid(email)) {
      valid = false;
  } 
  return valid;
};
