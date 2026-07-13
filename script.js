const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
      nav.classList.add('nav-black');
    } else {
      nav.classList.remove('nav-black');
    }
  });
}

const toggleBtn = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.nav-link');

if (toggleBtn && navbarLinks) {
  toggleBtn.addEventListener('click', (event) => {
    event.preventDefault();
    navbarLinks.classList.toggle('nav-link-mobile');
  });
}

const revealItems = document.querySelectorAll('.highlight-card, .poster-card');

const revealOnScroll = () => {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      item.classList.add('is-visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
      