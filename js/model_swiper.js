const swiper2 = new Swiper('div.model div.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  grabCursor: true, //스와이프 시 마우스 포인터 모양 변경
  slidesPerView: '3', // css에 지정한 슬라이더의 크리를 반영
  centeredSlides : true, // 슬라이더 패널을을 항상 가운데로 반환
  speed: 1500, //슬라이더 이동 속도 지정
  effect : 'slide', // 이팩트 효과
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1200:{
      slidesPerView:3,
    },
    860: {
      slidesPerView:3,
    
    },
    460: {
      slidesPerView: 1,

    }
  },
});
