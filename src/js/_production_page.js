if (document.querySelector('.production_process') && $(window).width() < 768) {
  document.querySelectorAll('.production_process .item').forEach((one) => {
    let element = $('<div class="swiper-slide"></div>').append(one);
    console.log(element);
    $('.production_process .swiper-wrapper').append(element);
  });
  let productionProcessSwiper = new Swiper(
    '.production_process .swiper-container',
    {
      loop: true,
      slidesPerView: 1,
      autoHeight: true,
    }
  );
}

if ($(window).width() < 768) {
  $('.connect_menu .active').click((e) => {
    e.preventDefault();
    $('.connect_menu').toggleClass('open');
  });
}
