/* Lagan Swiper */
let laganSwiper = new Swiper('.header-content .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  centerMode: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.header-content .next',
    prevEl: '.header-content .prev',
  },
});

/* Complect Swiper */
let complectSwiper = new Swiper('.swiper-container.complect', {
  spaceBetween: 28,
  loop: true,
  centerMode: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.15,
      spaceBetween: 19,
    },
    576: {
      slidesPerView: 1.15,
      spaceBetween: 19,
    },
    768: {
      slidesPerView: 2.15,
    },
    991: {
      slidesPerView: 2.15,
    },
    1200: {
      slidesPerView: 3.15,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});
/* Set Swiper */
let setSwiper = new Swiper('.set .swiper-container', {
  spaceBetween: 30,
  loop: true,
  centerMode: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.15,
    },
    576: {
      slidesPerView: 1.15,
    },
    768: {
      slidesPerView: 2.15,
    },
    991: {
      slidesPerView: 2.15,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});

/* Why Swiper */
let whySwiper = new Swiper('.why .swiper-container', {
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  centerMode: true,
  navigation: {
    nextEl: '.why .why-arrow-right',
    prevEl: '.why .why-arrow-left',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

/* Partners Swiper */
let partnerSwiper = new Swiper('.partners .swiper-container', {
  spaceBetween: 10,
  loop: true,
  centerMode: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

/* Our Team Swiper */
let ourTeamSwiper = new Swiper('.our_team .swiper-container', {
  spaceBetween: 40,
  loop: true,
  centerMode: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

/* Certificates Swiper */
let certificatesSwiper = new Swiper('.certificates .swiper-container', {
  spaceBetween: 30,
  loop: true,
  centerMode: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

$('.certificates .prev').click(() => {
  certificatesSwiper.slidePrev();
});

$('.certificates .next').click(() => {
  certificatesSwiper.slideNext();
});

/* Retail Swiper */
let retailSwiper = new Swiper('.retail-why .swiper-container', {
  spaceBetween: 28,
  loop: true,
  centerMode: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});

/* Where Swiper */
let whereSwiper = new Swiper('.where .swiper-container', {
  spaceBetween: 0,
  loop: true,
  centerMode: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});
