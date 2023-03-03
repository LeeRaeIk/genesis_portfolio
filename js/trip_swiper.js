const swiper4 = new Swiper(' div.tripbox div.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay : {
    delay : 1000,
  },
  

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
  spaceBetween:10,
  grabCursor: false, //스와이프 시 마우스 포인터 모양 변경
   // css에 지정한 슬라이더의 크리를 반영
  centeredSlides : true, // 슬라이더 패널을을 항상 가운데로 반환
  speed: 1000, //슬라이더 이동 속도 지정
  effect : 'coverflow', // 이팩트 효과
  // And if we need scrollbar
  mousewheel: {
    invert: false,
  },
  breakpoints: {
    1200:{
      slidesPerView:5,
    },
    860: {
      slidesPerView:3,
    
    },
    460: {
      slidesPerView: 1,

    },
    350: {
      slidesPerView : 1,
    }
  },
});



