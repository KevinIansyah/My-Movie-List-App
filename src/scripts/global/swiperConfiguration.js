import Swiper from 'swiper';
import 'swiper/css/bundle';

const swiperConfiguration = () => {
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1400: {
        slidesPerView: 9,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      820: {
        slidesPerView: 4.2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      450: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      350: {
        slidesPerView: 2.8,
        spaceBetween: 10,
      },
      250: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
    },
  });
};

const swiperConfigurationCredits = () => {
  const swiper = new Swiper('.swiperCredits', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1400: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      360: {
        slidesPerView: 2.8,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
    },
  });
};

const swiperConfigurationMediaVideos = () => {
  const swiper = new Swiper('.swiperVideos', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1400: {
        slidesPerView: 2.3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 1.7,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 1.25,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      360: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
};

const swiperConfigurationMediaPoster = () => {
  const swiper = new Swiper('.swiperPoster', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1400: {
        slidesPerView: 5.5,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 2.3,
        spaceBetween: 10,
      },
      360: {
        slidesPerView: 1.8,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
    },
  });
};

export {
  swiperConfiguration,
  swiperConfigurationCredits,
  swiperConfigurationMediaVideos,
  swiperConfigurationMediaPoster,
};
