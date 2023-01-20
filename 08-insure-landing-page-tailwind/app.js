const mobileNav = document.querySelector('.mobile-nav');
const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
  mobileNav.classList.toggle('open')
})