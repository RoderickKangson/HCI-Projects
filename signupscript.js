const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    nav.classList.add('nav-black');
  } 
  else {
    nav.classList.remove('nav-black');
  }
});

const toggleBtn = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".nav-link");
      
toggleBtn.addEventListener("click", () => {
navbarLinks.classList.toggle("nav-link-mobile");
});

function validateForm(event) {
  event.preventDefault();

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirm = document.getElementById('confirm').value;

  var errorMessages = [];

  if (email === "") {
    errorMessages.push("Email must be filled out");
  }

  if (!email.endsWith("@gmail.com")) {
    errorMessages.push("Invalid email, must end with @gmail.com");
  }

  if (password === "") {
    errorMessages.push("Password must be filled out");
  }

  if (password.length < 8 || password.length > 15) {
    errorMessages.push("The length of password must be between 8-15");
  }

  if (password !== confirm) {
    errorMessages.push("Passwords do not match");
  }

  if (errorMessages.length > 0) {
    alert(errorMessages.join("\n"));
    return false;
  }

  document.getElementById('Forms').submit();
}
