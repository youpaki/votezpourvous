// script.js
// Add event listener to animate hero section on scroll
window.addEventListener('scroll', function() {
  const heroSection = document.querySelector('.hero');
  const heroHeight = heroSection.offsetHeight;
  const scrollTop = window.scrollY;

  if (scrollTop > heroHeight / 2) {
    heroSection.classList.add('animatefadeIn');
  } else {
    heroSection.classList.remove('animatefadeIn');
  }
});