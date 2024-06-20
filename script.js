document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const header = document.querySelector('.header');

    burger.addEventListener('click', () => {
        header.classList.toggle('open');
    });
});
//=====================================================
  const carousel = document.querySelector('.carousel-3');
  const prevButton = document.querySelector('.left');
  const nextButton = document.querySelector('.right');
  let cont8Index = 0;
  
  function getTotalWidth() {
      let totalWidth = 0;
      for (let i = 0; i < carousel.children.length; i++) {
          totalWidth += carousel.children[i].offsetWidth;
      }
      return totalWidth;
  };
  function updateCarousel() {
      const carouselWrapperWidth = document.querySelector('.carousel-wrapper').offsetWidth;
      const totalWidth = getTotalWidth();
      const maxIndex = Math.ceil(totalWidth / carouselWrapperWidth) - 1;
      cont8Index = Math.min(cont8Index, maxIndex);
      const translateX = -(cont8Index * carouselWrapperWidth);
      carousel.style.transform = `translateX(${translateX}px)`;
  }
  
  prevButton.addEventListener('click', () => {
    cont8Index = (cont8Index === 0) ? Math.ceil(getTotalWidth() / document.querySelector('.carousel-wrapper').offsetWidth) - 1 : cont8Index - 1;
      updateCarousel();
  });
  
  nextButton.addEventListener('click', () => {
    cont8Index = (cont8Index === Math.ceil(getTotalWidth() / document.querySelector('.carousel-wrapper').offsetWidth) - 1) ? 0 : cont8Index + 1;
      updateCarousel();
  });
  
  window.addEventListener('resize', updateCarousel);

  updateCarousel();
//====================================================
  $('div.footer-arrow-up').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});

$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

  const SliderChanger = (carousel, offset) => {
    const activeSlide = carousel.querySelector("[data-active]");
    const slides = [...carousel.querySelectorAll(".slide")];
    const currentIndex = slides.indexOf(activeSlide);
    let newIndex = currentIndex + offset;

    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;
    slides[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
};

const onPrev = (carouselId) => {
    const carousel = document.getElementById(carouselId);
    SliderChanger(carousel, -1);
};

const onNext = (carouselId) => {
    const carousel = document.getElementById(carouselId);
    SliderChanger(carousel, 1);
};
