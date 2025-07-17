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


  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });


  const target = document.querySelector('.scroll-effect');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scrolled');
      } else {
        entry.target.classList.remove('scrolled'); // optional to reverse
      }
    });
  }, {
    threshold: 0.5 // trigger when 50% visible
  });

  observer.observe(target);



