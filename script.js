const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
      nav.classList.add('nav-black');
    } 
    else {
      nav.classList.remove('nav-black');
    }
  }
);

const toggleBtn = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".nav-link");
      
toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("nav-link-mobile");
});
      