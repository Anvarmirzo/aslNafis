const modalOpeners = document.querySelectorAll('.get-modal');
const modals = document.querySelectorAll('.modal');

modalOpeners.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const close = document.querySelectorAll('.close');
    modals.forEach(function (modal) {
      if (btn.getAttribute('data-modal') === modal.getAttribute('data-modal')) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        close.forEach((item) => {
          item.addEventListener('click', function () {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
          });
        });
      }
    });
  });
});
