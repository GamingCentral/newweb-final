const animContainer = document.querySelector('.anim-container');

const carousels = [...document.querySelectorAll('.carousel')];
const indicators = [...document.querySelectorAll('.indicators span')];

let carousel_index = 0;

setTimeout(() => {
    animContainer.remove();
    carousels[0].classList.add('active');
    setIntervalForSlider();
}, 3500);

const setIntervalForSlider = () => {
    setInterval(() => {
        
        indicators[carousel_index].classList.remove('active');
        carousels[carousel_index].classList.remove('active');

        if(carousel_index == carousels.length - 1){
            carousel_index = 0
        } else{
            carousel_index++;
        }

        indicators[carousel_index].classList.add('active');
        carousels[carousel_index].classList.add('active');

    }, 3000);
}
///// Section-1 CSS-Slider /////    
  // Auto Switching Images for CSS-Slider
  function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }

  var bannerTimer = setInterval(bannerSwitcher, 5000);

  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
  });


///// Anchor Smooth Scroll /////
//   $('.main-menu a, .learn-more-button a').click(function(e){
    
//     e.preventDefault();
        
//     var target = $(this).attr('href');
        
//     $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
//     return false;
//   });