$(document).ready(function(){ //START


  var swiper2 = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    initialSlide:1,
    pagination: {
      el: ".mySwiper1 .swiper-pagination",
      clickable: true,
    },
  });
  
  var swiper1 = new Swiper(".mySwiper2", {
    slidesPerView: 2.5,
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    initialSlide:1,
    pagination: {
      el: ".mySwiper2 .swiper-pagination",
      clickable: true,
    },
  });



}); //END
