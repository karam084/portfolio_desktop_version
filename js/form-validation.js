const form = document.getElementById('contact-form');

const validateEmail = (email) => {
  var emailRegex = /^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
  if (!emailRegex.test( $email )) {
    return false;
  } else {
    return true;
  }
}
form.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();
    
    const email = form.elements['email'];
    if(validateEmail(email)) {
        email.setCustomValidity("Please enter a valid email address and in lowercase letters.");
        
        //display error message here
        
    } else {
        email.setCustomValidity("");
        form.submit();
    }
});

