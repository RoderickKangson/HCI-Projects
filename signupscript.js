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

if (toggleBtn && navbarLinks) {
  toggleBtn.addEventListener("click", (event) => {
    event.preventDefault();
    navbarLinks.classList.toggle("nav-link-mobile");
  });
}

function validateForm(event) {
  event.preventDefault();

  const email = document.getElementById('email')?.value.trim() || '';
  const password = document.getElementById('password')?.value || '';
  const confirm = document.getElementById('confirm')?.value || '';
  const errorMessages = [];

  if (email === "") {
    errorMessages.push("Email must be filled out");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorMessages.push("Please enter a valid email address");
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

  document.getElementById('Forms')?.submit();
}
