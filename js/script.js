$(document).ready(function(){ //START

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    initialSlide:1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
}); //END
