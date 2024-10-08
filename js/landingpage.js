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
window.scroll({
  top:0,
  left:100,
  behavior:'smooth'
});
/*     window.scrollBy({
  top:100,
  left:100,
  behavior:'smooth',
}); */


//jquery 제이쿼리
//s3 logo btn
$(".s3 #btn .swiper-button-next").hover(function(){
  $(".s3 #btn .swiper-button-next img").attr('src', 'images/s3&s4_arrow_right_Black.png');
},function(){
  $(".s3 #btn .swiper-button-next img").attr('src', 'images/s3&s4_arrow_right_Color.png');
});
$(".s3 #btn .swiper-button-prev").hover(function(){
  $(".s3 #btn .swiper-button-prev img").attr('src', 'images/s3&s4_arrow_left_Black.png');
},function(){
  $(".s3 #btn .swiper-button-prev img").attr('src', 'images/s3&s4_arrow_left_Color.png');
});