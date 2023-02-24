const swiper3 = new Swiper('div.space div.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type:'fraction' ,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true, //스와이프 시 마우스 포인터 모양 변경
  slidesPerView: 'auto', // css에 지정한 슬라이더의 크리를 반영
  centeredSlides : true, // 슬라이더 패널을을 항상 가운데로 반환
  speed: 1000, //슬라이더 이동 속도 지정
  effect : 'slide', // 이팩트 효과
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  mousewheel: {
    invert: false,
    
  },
});