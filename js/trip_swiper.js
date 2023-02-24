const swiper4 = new Swiper(' div.tripbox div.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

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
  spaceBetween:50,
  grabCursor: false, //스와이프 시 마우스 포인터 모양 변경
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




$(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 500) {
          $('#MOVE_TOP_BTN').fadeIn();
      } else {
          $('#MOVE_TOP_BTN').fadeOut();
      }
  });
  
  $("#MOVE_TOP_BTN").click(function() {
      $('html, body').animate({
          scrollTop : 0
      }, 400);
      return false;
  });
});


