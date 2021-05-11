"use strict";

$(document).ready(function () {
  'use strict';

  var preloader = document.querySelector('.preloader');

  if (preloader) {
    window.addEventListener('load', function () {
      preloader.classList.add('hide-preloader');
    });
  }

  ;
  var nav = document.querySelector('.links-container');
  var burger = document.querySelector('.nav-toggle');
  burger.addEventListener('click', function (e) {
    nav.classList.toggle('active');
  });
  ;
  /* Partner Swiper */

  /* let partnerSwiper = new Swiper('.partners-slider .swiper-container', {
    speed: 3000,
    freeMode: true,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      enabled: true,
      waitForTransition: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 7,
      },
    },
  }); */

  /* Lagan Swiper */

  var laganSwiper = new Swiper('.header-content .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centerMode: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.header-content .next',
      prevEl: '.header-content .prev'
    }
  });
  /* Complect Swiper */

  var complectSwiper = new Swiper('.swiper-container.complect', {
    spaceBetween: 28,
    loop: true,
    centerMode: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      320: {
        slidesPerView: 1.15
      },
      576: {
        slidesPerView: 1.15
      },
      768: {
        slidesPerView: 2.15
      },
      991: {
        slidesPerView: 2.15
      },
      1200: {
        slidesPerView: 3.15
      },
      1400: {
        slidesPerView: 4
      }
    }
  });
  /* Set Swiper */

  var setSwiper = new Swiper('.set .swiper-container', {
    spaceBetween: 30,
    loop: true,
    centerMode: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      320: {
        slidesPerView: 1.15
      },
      576: {
        slidesPerView: 1.15
      },
      768: {
        slidesPerView: 2.15
      },
      991: {
        slidesPerView: 2.15
      },
      1200: {
        slidesPerView: 3
      },
      1400: {
        slidesPerView: 3
      }
    }
  });
  /* Why Swiper */

  var whySwiper = new Swiper('.why .swiper-container', {
    spaceBetween: 10,
    loop: true,
    centerMode: true,
    navigation: {
      nextEl: '.why .why-arrow-left',
      prevEl: '.why .why-arrow-right'
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 3
      }
    }
  });
  /* Partners Swiper */

  var partnerSwiper = new Swiper('.partners .swiper-container', {
    spaceBetween: 10,
    loop: true,
    centerMode: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
  });
  ;
  ;
});