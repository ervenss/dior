const swiperTop = new Swiper('.top__swiper', {
    // Optional parameters
    effect: 'fade',
    autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });


  document.querySelectorAll('.accordion__trigger').forEach((item) => {
    item.addEventListener('click', () => {
      const accordionItem = item.closest('.accordion__item');
      if (accordionItem) {
        accordionItem.classList.toggle('accordion__item--active');
      }
    });
  });
  