const nav = document.querySelector('.mobile.links-container');
const burger = document.querySelector('.nav-toggle');
const openDropdown = document.querySelector('.open-dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');
const navLayer = document.querySelector('.nav-layer');
burger.addEventListener('click', function (e) {
  nav.classList.toggle('active');
  document.body.classList.toggle('overflow-hidden');
});
if (openDropdown) {
  openDropdown.addEventListener('click', function (e) {
    dropdownMenu.classList.toggle('active');
    navLayer.classList.toggle('active');
  });
}
if (navLayer) {
  navLayer.addEventListener('click', function (e) {
    dropdownMenu.classList.remove('active');
    navLayer.classList.remove('active');
  });
}
