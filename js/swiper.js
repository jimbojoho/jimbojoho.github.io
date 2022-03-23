var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    rewind: false,
    speed: 400,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
      breakpoints: {
        1: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },  
  });