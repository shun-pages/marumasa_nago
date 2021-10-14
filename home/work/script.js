window.onload = function(){
  function toggleNav() {
      const body = document.body;
      const hamburger = document.getElementById("js-hamburger");
      const blackBg = document.getElementById("js-black-bg");
      const addNavOpen = function () {
          body.classList.toggle("nav-open")
      }
   
      console.log(hamburger)
      blackBg.addEventListener("click", addNavOpen);
      hamburger.addEventListener("click", addNavOpen);
   }
  toggleNav();
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });