const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },

    freeMode: true,
    freeModeMomentum: false,
    grabCursor: true,
    // breakpoints: {
    //   640: { slidesPerView: 2 },
    //   768: { slidesPerView: 3 },
    //   1024: { slidesPerView: 5 }
    // }
  });