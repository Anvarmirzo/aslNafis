const preloader = document.querySelector('.preloader');
if (preloader) {
  window.addEventListener('load', function () {
    preloader.classList.add('hide-preloader');
  });
}
