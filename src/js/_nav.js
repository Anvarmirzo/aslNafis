const nav = document.querySelector('.links-container');
const burger = document.querySelector('.nav-toggle');

burger.addEventListener('click', function (e) {
  nav.classList.toggle('active');
});
