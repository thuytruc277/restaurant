//aos 초기화
AOS.init({
  duration: 2000,  //mọi hiệu ứng đều chậm 2s
  //once: true, //chỉ hiệu ứng 1 lần khi f5 trang, lúc sroll lên xuống thì ko lặp lại
  //disable: window.innerWidth < 768, //chỉ hiện ở window, ko hiện trên đt
});





/* 1 - BANNER slide */
const banner_list = new Swiper('.banner_list', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/* nhấn nút pause thì dừng slide và hiện nút play, bấm play thì tiếp tục auto slide */
$(".pause").click(function () {
  banner_list.autoplay.stop();
  $(this).hide();
  $(".play").show();
});
$(".play").click(function () {
  banner_list.autoplay.start();
  $(this).hide();
  $(".pause").show();
});


/* 2 - BEST MENU */
const best_list = new Swiper('.best_list', {
  centeredSlides: true, //활성화된 slide가 가운데
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar", //bullets, progressbar, fraction
  },
  //add more 반응형 slide option 
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      //spaceBetween: 20,
    },
    768: { //768px 이상에서 
      slidesPerView: 2.5,
      //spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4.5,
      //spaceBetween: 50,
    },
  },
});


/* NEW MENU */
$(".new_name button").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active"); //khi click vào từng button thì hiện màu nền cam, khi click vào button khác thì màu của ô đã nhấn mất đi

  let number = $(this).index();
  $(".new_img li").eq(number).fadeIn().siblings().hide(); //nhấn vào từng button thì các ảnh bên trong li hiện ra, nhấn vào cái khác thì cái đã hiện bị mất đi
});
