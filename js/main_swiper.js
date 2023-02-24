const swiper = new Swiper('div.main div.swiper', { //프렘의 요소명
  direction: 'horizontal', //스와이프의 방향
  loop: true, //순환여부
  // effect: 'slide',

  pagination: {
    el: '.swiper-pagination',  //페이지 메뉴 요소명
    clickable: true,
    type: 'progressbar', //페이지 버튼 대신 슬라이드 번호
  },

  navigation: {
    nextEl: '.swiper-button-next', //다음 버튼 요소명
    prevEl: '.swiper-button-prev', //이전 버튼 요소명
  },

  grabCursor: true, //스와이프 시 마우스 포인터 모양 변경
  centeredSlides : true, // 슬라이더 패널을을 항상 가운데로 반환
  speed: 1500, //슬라이더 이동 속도 지정
  effect : 'slide', // 이팩트 효과

  autoplay : { // 자동 슬라이드
    delay : 5000,
    disableOnInteraction : true
  },
  slidesPerView : '1' // css에 지정한 슬라이더의 크리를 반영
});






