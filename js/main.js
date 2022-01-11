
// Интерактивная карта
window.onload = function() {
   const myBtn1 = document.querySelector('.myBtn1');
const myModal1 = document.querySelector('.myModal1');

myBtn1.addEventListener("click", (event) => {
  myModal1.classList.toggle("myModal--active");
});

const myBtn2 = document.querySelector('.myBtn2');
const myModal2 = document.querySelector('.myModal2');

myBtn2.addEventListener("click", (event) => {
  myModal2.classList.toggle("myModal--active");
});

const myBtn3 = document.querySelector('.myBtn3');
const myModal3 = document.querySelector('.myModal3');

myBtn3.addEventListener("click", (event) => {
  myModal3.classList.toggle("myModal--active");
});

const myBtn4 = document.querySelector('.myBtn4');
const myModal4 = document.querySelector('.myModal4');

myBtn4.addEventListener("click", (event) => {
  myModal4.classList.toggle("myModal--active");
});

const myBtn5 = document.querySelector('.myBtn5');
const myModal5 = document.querySelector('.myModa5');

myBtn5.addEventListener("click", (event) => {
  myModal5.classList.toggle("myModal--active");
});

const myBtn6 = document.querySelector('.myBtn6');
const myModal6 = document.querySelector('.myModal6');

myBtn6.addEventListener("click", (event) => {
  myModal6.classList.toggle("myModal--active");
});

const myBtn7 = document.querySelector('.myBtn7');
const myModal7 = document.querySelector('.myModal7');

myBtn7.addEventListener("click", (event) => {
  myModal7.classList.toggle("myModal--active");
});

const myBtn8 = document.querySelector('.myBtn8');
const myModal8 = document.querySelector('.myModal8');

myBtn8.addEventListener("click", (event) => {
  myModal8.classList.toggle("myModal--active");
});
};



// document.querySelector('.myBtn1').addEventListener('click', function(){
// document.querySelector('.myModal1').classList.toggle('myModal--active');
// });

// document.querySelector('.myBtn2').addEventListener('click', function(){
// document.querySelector('.myModal2').classList.toggle('myModal--active');
// });


// document.querySelector('.myBtn3').addEventListener('click', function(){
// document.querySelector('.myModal3').classList.toggle('myModal--active');
// });


// document.querySelector('.myBtn4').addEventListener('click', function(){
// document.querySelector('.myModal4').classList.toggle('myModal--active');
// });


// document.querySelector('.myBtn5').addEventListener('click', function(){
// document.querySelector('.myModal5').classList.toggle('myModal--active');
// });


// document.querySelector('.myBtn6').addEventListener('click', function(){
// document.querySelector('.myModal6').classList.toggle('myModal--active');
// });


// document.querySelector('.myBtn7').addEventListener('click', function(){
// document.querySelector('.myModal7').classList.toggle('myModal--active');
// });


// document.querySelector('.myBtn8').addEventListener('click', function(){
// document.querySelector('.myModal8').classList.toggle('myModal--active');
// });

// Липкое меню

document.addEventListener("DOMContentLoaded", onDOMReady);

function onDOMReady() {
  window.addEventListener('scroll', onWindowScroll)

  var menu = document.querySelector('.header__top');

  function onWindowScroll() {
    if(window.document.scrollingElement.scrollTop > 150){
      menu.classList.add("fixed");
    }
    else { 
      menu.classList.remove("fixed")
    }
  }
}

// Подменю фон

document.querySelector('.menu__submenu-drop').onmouseover=function(){document.querySelector('.menu__submenu-bg').classList.add("menu__submenu-bg-active");}
document.querySelector('.menu__submenu-drop').onmouseout=function(){document.querySelector('.menu__submenu-bg').classList.remove("menu__submenu-bg-active");}

// Бургер

document.querySelector('.menu__btn').addEventListener('click', function(){
document.querySelector('.menu__list').classList.toggle('menu__list--active');
});

document.querySelector('.menu__btn').addEventListener('click', function(){
document.querySelector('.menu__btn').classList.toggle('menu__btn--dark');
});

document.querySelector('.menu__btn').addEventListener('click', function(){
document.querySelector('.menu__ru').classList.toggle('menu__ru--block');
});



document.querySelector('.plus-minus-toggle').addEventListener('click', function(){
document.querySelector('.menu__submenu').classList.toggle('mobile--active');
});


document.querySelector('.plus-minus-toggle').addEventListener('click', function(){
document.querySelector('.plus-minus-toggle').classList.toggle('collapsed');
});

document.querySelector('.plus-minus-toggle').addEventListener('click', function(){
document.querySelector('.menu__link-drop').classList.toggle('color-drop');
});


const menuButton2 = document.querySelector('.menu__btn');
const menu2 = document.querySelector('.menu__btn');

menuButton2.addEventListener("click", (event) => {
  menu2.classList.toggle("_active");
});

const menuButton3 = document.querySelector('.menu__btn');
const menu3 = document.querySelector('.menu__btn-wrapper');

menuButton3.addEventListener("click", (event) => {
  menu3.classList.toggle("menu__btn-wrapper_active");
});


// СЛАЙДЕРЫ ПРОДУКЦИИ


// Флаг включённости слайдера slick
var slickSliderActive = false;

// Включение или выключение слайдера (в зависимости от ширины)
function checkSlider(){    
  
  // Если вьюпорт уже чем 769 
  if( $(window).width() < 769 - getScroll() ) {
    
    // Если флаг включённости опущен, то включим и поднимем флаг
    if(slickSliderActive == false) {
      $('.prod-slider').slick({
        // dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // centerMode: true,
        variableWidth: true
      });
        slickSliderActive = true;
    }
  
  } 
  // Иначе (вьюпорт НЕ уже чем 768)
  else {
    
    // Если флаг включённости поднят, выключаем и опускаем флаг
    if(slickSliderActive == true) {
      $('.prod-slider').slick('unslick');
      slickSliderActive = false;
    }
    
  }
};

// По готовности DOM...
checkSlider();

// По любому изменению размера вьюпорта...
$(window).on('resize', checkSlider);

function getScroll(){
  var div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollWidth;
}


// СЛАЙДЕРЫ КОММЕНТОВ

// Флаг включённости слайдера slick
var slickSliderActiveComm = false;

// Включение или выключение слайдера (в зависимости от ширины)
function checkSliderComm(){    
  
  // Если вьюпорт уже чем 501 
  if( $(window).width() < 501 - getScroll() ) {
    
    // Если флаг включённости опущен, то включим и поднимем флаг
    if(slickSliderActiveComm == false) {
      $('.comm-slider').slick({
        // dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // centerMode: true,
        variableWidth: true
      });
        slickSliderActiveComm = true;
    }
  
  } 
  // Иначе (вьюпорт НЕ уже чем 768)
  else {
    
    // Если флаг включённости поднят, выключаем и опускаем флаг
    if(slickSliderActiveComm == true) {
      $('.comm-slider').slick('unslick');
      slickSliderActiveComm = false;
    }
    
  }
};

// По готовности DOM...
checkSliderComm();

// По любому изменению размера вьюпорта...
$(window).on('resize', checkSliderComm);

function getScroll(){
  var div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollWidth;
}