var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    grabCursor: true,
    rewind: false,
    speed: 500,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
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
        1440: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1800: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
      },  
  });