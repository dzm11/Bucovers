const burger = document.querySelector('.burger');
const body = document.querySelector('body');
const menuItems = document.querySelector('.mobile');
const items = document.querySelectorAll('.nav .mobile .mobile__menu .menu-item a');
const social = document.querySelectorAll('.nav .mobile__menu .menu__social .row');

const html = document.documentElement;

const initialHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

document.documentElement.style.setProperty('overflow', 'auto')
const metaViewport = document.querySelector('meta[name=viewport]')
metaViewport.setAttribute('content', 'height=' + initialHeight + 'px, width=device-width, initial-scale=1.0')

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
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600:{
        slidesPerView: 2,
      },
      800:{
        slidesPerView: 3,
      },
      1050:{
        slidesPerView: 4,
      },
      1400:{
        slidesPerView: 5,
      }
    },
  });