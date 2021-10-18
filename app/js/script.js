const burger = document.querySelector('.burger');
const body = document.querySelector('body');
const menuItems = document.querySelector('.mobile');
const items = document.querySelectorAll('.nav .mobile .mobile__menu .menu-item a');
const social = document.querySelectorAll('.nav .mobile__menu .menu__social .row');

burger.addEventListener("click", () => {
    body.classList.toggle("open");
    
    menuItems.classList.toggle("open");

    items.forEach(link=>{
        link.classList.toggle("fade");

    });

    social.forEach(row=>{
        row.classList.toggle("fade");
        })

})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });