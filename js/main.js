
/**
 * 여기 아래서부터는 Badge 영역이다. 
 * 
 * document는 HTML 자체다
*/
const badgeEl = document.querySelector('header .badges');

/**
 windows는 화면 자체다. 브라우저 창이다.
 scroll 이벤트, 익명의 함수function() 사용
 scroll를 이동할때마다 함수를 실행한다.

 .throttle lodash에 제공하는 함수가 우루루 실행되는 것을 방지. 부하방지
  scroll 이벤트를 사용시에 .throttle를 많이 사용한다.

  _.throttle(함수, 시간)  lodash.js에서 불러와서 사용!!!!!
*/
window.addEventListener('scroll', _.throttle(function (){
    // console.log('scroll!');
    console.log(window.scrollY);

    //화면이 스크롤될때마다 윈도우 객체의 스크롤Y가 갱신된다. 스크롤Y의 화면의 위치를 알수잇다
    if(window.scrollY > 500) {
      
      //배지 숨기기
      //gsap.to(요소, 지속시간, 옵션);  gsap의 애니메이션 사용
      gsap.to(badgeEl, .6, {
        opacity: 0,
        display: 'none'
      });
       /**  <div id="to-top">에 사용하기 위해서 추가된 스크립트
       *  버튼 보이기!!!!
       */
        gsap.to('#to-top', .2, {
          x: 0
        });

    } else {
      // 배지 보이기
      gsap.to(badgeEl, .6, {
        opacity: 1,
        display: 'block'
      });
      /**  <div id="to-top">에 사용하기 위해서 추가된 스크립트
       *  버튼 숨기기!!!!
       */
      gsap.to('#to-top', .2, {
        x: 100
      });
    }

    //아래 300은 0.3초를 얘기한다.
}, 300));

/**  
 * div id="to-top">의 버튼 클릭시 이벤트
*  
*/
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function() {
  
  //alert("test");
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

// window.addEventListener('scroll', function() {
//   console.log('scroll!');
// });

// .visual class요소를 가진 클래스중에 fade-in 클래스 요소를 fadeEls에 할당한다.
const fadeEls = document.querySelectorAll('.visual .fade-in');

// 아래의 fadeEl는 임의의 변수를 사용해도 된다.
// 여기서는 fadeEls 복수를 받아오기에 fadeEl 단수를 선언
fadeEls.forEach(function (fadeEl, index) {
  
  
  //이미지의 delay요소를 적용하요 커피 이미지가 순차적으로 나오도록 설정
  //gsap.to(요소, 지속시간, 옵션);  gsap의 애니메이션 사용
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,  //0.7, 1.4, 2.1
    opacity: 1
  });

});

/*************************************************************
 * 공지사항 section(중간지점의 공지사항)
 * 스와이퍼 스크립트 
 * new Swiper(선택자, 옵셥)
 **************************************************************/ 

new Swiper('.notice-line .swiper-container', {
  
  direction: 'vertical',
  autoplay: true,  //자동으로 슬라이드 재생 
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,     //한번에 보여줄 슬라이드 개수
  spaceBetween: 10,     //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // }
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEL: '.promotion .swiper-prev',
    nextEL: '.promotion .swiper-next'
  }
});

/*************************************************************
 * 공지사항 section(하단지점의 공지사항)
 * 스와이퍼 스크립트 
 * new Swiper(선택자, 옵셥)
 **************************************************************/ 

new Swiper('.awards .swiper-container', {
  autoplay: true,   //자동재생
  loop: true,       //반복재생
  spaceBetween: 30, //사이사이 여백 30px
  slidesPerView: 5,  //하나의 화면에 몇개를 slide를 보여줄거냐?
  navigation: {
    prevEL: '.awards .swiper-prev',
    nextEL: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {

  isHidePromotion = !isHidePromotion //!isHidePromotion을 true로 해달라는 뜻임....즉 반대값으로 반환하는 값
 
  if (isHidePromotion) {
      //숨김처리!
      promotionEl.classList.add('hide');
  } else {
      //보임처리!
      promotionEl.classList.remove('hide');

  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {

  //gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,      //좌표 Y축
    repeat: -1,   //-1은 무한반복
    yoyo: true,   //위 아래 움직임 
    ease: Power1.easeInOut,  //ease옵션을 통해 부드러운 동작사용
    delay: random(0, delay)      //3초 뒤에 이미지를 실행하겠다.
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

/////////////////////////////////////////////////////////////////////
//
// ScrollMagic.js 사용 (section별 스크롤 컨트롤 js 정의)
//
// 스크롤바를 움직일때마다 이벤트 감지할 수 있는 스크립트
// 
// 스크롤바를 아래로 내리면 이미지들이 좌/우로 움직이도록 스크롤js 정의
////////////////////////////////////////////////////////////////////

// 'section.scroll-spy' --> section 태그의 scroll-spy 클래스를 찾겠다
const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl) {

  // ScrollMagic.js 사용
  // new ScrollMagic.Scene().setClassToggle().addTo();
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());

});

/////////////////////////////////////////////////////////////////////
////
// 스크롤바를 아래로 내리면 이미지들이 좌/우로 움직이도록 스크롤js 정의
////////////////////////////////////////////////////////////////////
