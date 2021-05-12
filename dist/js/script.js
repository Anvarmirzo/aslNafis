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
  /* Our Team Swiper */

  var ourTeamSwiper = new Swiper('.our_team .swiper-container', {
    spaceBetween: 40,
    loop: true,
    centerMode: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
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
  /* Certificates Swiper */

  var certificatesSwiper = new Swiper('.certificates .swiper-container', {
    spaceBetween: 30,
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
  $('.certificates .prev').click(function () {
    certificatesSwiper.slidePrev();
  });
  $('.certificates .next').click(function () {
    certificatesSwiper.slideNext();
  });
  ;

  if (document.querySelector('.production_process') && $(window).width() < 768) {
    document.querySelectorAll('.production_process .item').forEach(function (one) {
      var element = $('<div class="swiper-slide"></div>').append(one);
      console.log(element);
      $('.production_process .swiper-wrapper').append(element);
    });
    var productionProcessSwiper = new Swiper('.production_process .swiper-container', {
      loop: true,
      slidesPerView: 1,
      autoHeight: true
    });
  }

  if ($(window).width() < 768) {
    $('.connect_menu .active').click(function (e) {
      e.preventDefault();
      $('.connect_menu').toggleClass('open');
    });
  }

  ;

  try {
    new fullpage('#fullpage', {
      scrollingSpeed: 800,
      navigationPosition: 'left'
    });
  } catch (error) {//   console.log(error);
  }

  ;
  $('.catalog .controller button').click(function (e) {
    if ($(window).width() < 768) {
      if ($(e.currentTarget).hasClass('first') && $(e.currentTarget).hasClass('active') && $('.catalog .controller').hasClass('open')) {
        $('.catalog .controller').removeClass('open');
      } else if ($(e.currentTarget).hasClass('first') && !$(e.currentTarget).hasClass('active') && $('.catalog .controller').hasClass('open')) {
        var tab_number = $(e.currentTarget).attr('data-for-tab');
        $('.catalog .controller button').removeClass('active');
        $(e.currentTarget).addClass('active');
        $(".catalog .tabs .tab").removeClass('active');
        $(".catalog .tabs .tab[data-tab=".concat(tab_number, "]")).addClass('active');
        $('.catalog .controller').removeClass('open');
      } else if ($(e.currentTarget).hasClass('first') && !$('.catalog .controller').hasClass('open')) {
        $('.catalog .controller').addClass('open');
      } else {
        var _tab_number = $(e.currentTarget).attr('data-for-tab');

        $('.catalog .controller button').removeClass('active');
        $(e.currentTarget).addClass('active');
        $(".catalog .tabs .tab").removeClass('active');
        $(".catalog .tabs .tab[data-tab=".concat(_tab_number, "]")).addClass('active');
        $('.catalog .controller').removeClass('open');
      }
    } else {
      var _tab_number2 = $(e.currentTarget).attr('data-for-tab');

      $('.catalog .controller button').removeClass('active');
      $(e.currentTarget).addClass('active');
      $(".catalog .tabs .tab").removeClass('active');
      $(".catalog .tabs .tab[data-tab=".concat(_tab_number2, "]")).addClass('active');
    }
  });
  ;
});