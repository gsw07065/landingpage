//s2 web swiper 오류
var swiper = new Swiper(".mySwiper", {
  //direction: "vertical",
  enabled: true,
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  forceToAxis: true,
  releaseOnEdges: true,
});

//s3 logo swiper
var swiper = new Swiper(".mySwiper1", {
  loop:true,
  slidesPerView: 4,
  spaceBetween: 0,
  centeredSlides: true,
  effect:"coverflow",
  coverflowEffect: {
    slideShadows: false,
    scale: .9,
    rotate: -17,
    stretch: 10,
    depth: 200,
    modifier:.6,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//스크롤링 부드럽게?
/* window.scroll({
  top:0,
  left:100,
  behavior:'smooth'
}); */
/*     window.scrollBy({
  top:100,
  left:100,
  behavior:'smooth',
}); */





//jquery 제이쿼리
//s3 logo, s4 character btn
$(".mySwiper1 #btn .swiper-button-next").hover(function(){
  $(".mySwiper1 #btn .swiper-button-next img").attr('src', 'images/s3&s4_arrow_right_Black.png');
},function(){
  $(".mySwiper1 #btn .swiper-button-next img").attr('src', 'images/s3&s4_arrow_right_Color.png');
});
$(".mySwiper1 #btn .swiper-button-prev").hover(function(){
  $(".mySwiper1 #btn .swiper-button-prev img").attr('src', 'images/s3&s4_arrow_left_Black.png');
},function(){
  $(".mySwiper1 #btn .swiper-button-prev img").attr('src', 'images/s3&s4_arrow_left_Color.png');
});


/* $('#fullpage').fullpage({
  navigation:true,
  verticalCentered: true,
  scrollBar: true,
  normalScrollElements: '.scrollable-element',
  afterLoad: function(origin, destination, direction) {
    if ($(".sec").hasClass("active")) { 
      $.fn.fullpage.setScrollingSpeed(0); // 속도 조정
        $.fn.fullpage.setAllowScrolling(false);
        $("#s2").css("overflowY","scroll");
    } else {
        // 나머지 페이지는 다시 FullPage.js 사용
        $.fn.fullpage.setScrollingSpeed(700);
        $.fn.fullpage.setAllowScrolling(true);
    };
  }
}); */


//페이지 이동시 해당 header 버튼 효과
$(window).scroll(function(){
  let s1Top = $("#s1").offset().top;
  let s1Bot = s1Top + $("#s1").height();
  let s2Top = $("#s2").offset().top;
  let s2Bot = s2Top + $("#s2").height();
  let s3Top = $("#s3").offset().top;
  let s3Bot = s3Top + $("#s3").height();
  let s4Top = $("#s4").offset().top;
  let s4Bot = s4Top + $("#s4").height();

  $("header .nav li a").removeClass("on");

  if($(this).scrollTop() >= s1Top && $(this).scrollTop() < s1Bot){
    $("header .nav li:nth-child(1) a").addClass("on");
  }else if($(this).scrollTop() >= s2Top && $(this).scrollTop() < s2Bot){
    $("header .nav li:nth-child(2) a").addClass("on");
  }else if($(this).scrollTop() >= s3Top && $(this).scrollTop() < s3Bot){
    $("header .nav li:nth-child(4) a").addClass("on");
  }else if($(this).scrollTop() >= s4Top && $(this).scrollTop() < s4Bot){
    $("header .nav li:nth-child(5) a").addClass("on");
  }else{
    $("header .nav li a").removeClass("on");
  }

  let s5Top = $("#s5").offset().top;
  let s5Bot = s5Top + $("#s5").height();



  if($(this).scrollTop() >= s5Top && $(this).scrollTop() < s5Bot){
    $("header .nav li a").css({color:"#000"});
    $("header .nav li span").css({color:"#000"});
    $("header .nav li:nth-child(3) a img").attr("src","images/top_logo_black.png");
/*     $("header .nav li a").hover(function(){
      $(this).addClass("s5");
    },function(){
      $(this).removeClass("s5");
    }) */
  }else{
    $("header .nav li a").css({color:"#FF4040"});
    //$("header .nav li a").css("border-bottom","3px solid #FF4040");
    $("header .nav li span").css({color:"#FF4040"});
    $("header .nav li:nth-child(3) a img").attr("src","images/s0_top_logo.png");
  }

});