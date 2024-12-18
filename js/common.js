//depth2
/* để chuột lên thì hiện ra menu2 và màu nền trắng, bỏ chuột ra thì mất */
$(".gnb > li").mouseenter(function () {
  $(this).find(".depth2").stop().fadeIn();
  $(".depth2_bg").stop().fadeIn();
  $("#header").addClass("active");
});

$(".gnb > li").mouseleave(function () {
  $(this).find(".depth2").stop().fadeOut();
  $(".depth2_bg").stop().fadeOut();
  $("#header").removeClass("active");
});



//nhấn nút ham thì hiện màn hình đen mờ và các menu
$(".ham").click(function () {
  $(".mgnb_wrap").fadeIn();
});
$(".mgnb_close").click(function () {
  $(".mgnb_wrap").fadeOut();
});

