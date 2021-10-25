$('.customer-list').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    dots: true,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow:`<button type='button' class='slick-prev pull-left'><img src="./images/arrow-left.svg"/></button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'><img src="./images/arrow-right.svg"/></button>`,
  });

const menuBtn = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.js-menu');
const mobileOverlay = document.querySelector('.js-mobile-overlay');
const activeClass = 'is-show';

menuBtn.addEventListener("click", function () {
  menu.classList.toggle(activeClass);
  mobileOverlay.style.display = 'block';
});
mobileOverlay.addEventListener('click', function(){
  menu.classList.remove(activeClass);
  mobileOverlay.style.display = 'none';
})
menu.addEventListener('click', function(e) {
  e.stopPropagation()
});;
  