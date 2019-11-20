'use strict';

/*-----------------HEADER SLIDER--------------------------*/
(function () {
  if (document.querySelector('#main-page')) {
    let headSlides = document.querySelectorAll('.head-slide');
    let currentSlide = 0;

    setInterval(changeSlide, 5000);

    function changeSlide() {
      headSlides[currentSlide].className = 'head-slide';
      currentSlide = (currentSlide + 1) % headSlides.length;
      headSlides[currentSlide].className = 'head-slide showing';
    }
  }
}());


/*-----------------BURGER------------------------------*/
(function () {
  let burgerBtn = document.querySelector('.burger-btn');
  let menu = document.querySelector('.list-navigation');
  window.addEventListener('click', toggleMenu);

  function toggleMenu(event) {
    if (event.target == burgerBtn) {
      menu.classList.toggle('list-navigation-show');
      burgerBtn.classList.toggle('btn-rotated');
    }
    if (event.target.tagName != 'A' && event.target != burgerBtn) {
      menu.classList.remove('list-navigation-show');
      burgerBtn.classList.remove('btn-rotated');
    }
  }
}());

/*----------------- ARROW UP --------------------------*/
(function () {
  if (window.location.pathname == 'index.html') {
    let header = document.querySelector('header');
    let arrowUp = document.querySelector('#arr-up');
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    document.onscroll = function () {
      if (scrolled >= header.offsetHeight) {
        arrowUp.style.opacity = '0';
      }
    }
  }
})();

/*----------------- GALLERY SLIDER --------------------------*/
(function () {
  if (document.querySelector('#main-page')) {
    let sliderWrap = document.querySelector('.gallery-slider-wrap');
    let btnPrev = sliderWrap.querySelector('.prev')
    let btnNext = sliderWrap.querySelector('.next');
    let gallery = document.querySelector('.gallery-slider');
    let images = document.querySelectorAll('.slider-item');
    let count = 0;

    setInterval(autoSlider, 3000);

    function autoSlider() {
      count + 1 == images.length ? count = 0 : count++;
      changePics();
    }

    function changePics() {
      for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
      }
      images[count].classList.remove('opacity0');
    }

    changePics();

    btnPrev.addEventListener('click', function () {
      if (count - 1 == -1) {
        count = images.length - 1;
      } else {
        count--;
      }
      changePics();
    });
    btnNext.addEventListener('click', function () {
      if (count + 1 == images.length) {
        count = 0;
      } else {
        count++;
      }
      changePics();
    });
  }
})();

/*----------------- GALLERY TILE --------------------------*/

if (document.querySelector('#gall-page')) {

  (function () {
    let gallCont = document.querySelector('.gall-container');
    let gallItem = document.querySelectorAll('.gall-item')
    let picWrap = document.querySelector('.box-picture-wrap');

    gallCont.addEventListener('click', function (e) {
      let imgBig = document.createElement('img');
      let wPort = window.matchMedia("(orientation: portrait)");

      if (e.target.tagName == 'IMG') {
        picWrap.style.transform = 'scale(1)';
        picWrap.appendChild(imgBig);
        imgBig.src = e.target.src;

        function checkWport() {
          if (wPort.matches) {
            if (imgBig.offsetHeight > window.innerHeight) {
              imgBig.style.cssText =
                'width: auto; height: 95vh;';
            } else {
              imgBig.style.cssText =
                'width: 95vw; height: auto;';
            }
          } else {
            if (imgBig.offsetHeight > window.innerHeight) {
              imgBig.style.cssText =
                'width: auto; height: 95vh;';
            } else {
              imgBig.style.cssText =
                'width: 95vw; height: auto;';
            }
          }
        }

        checkWport();

        window.addEventListener('resize', function () {
          checkWport();
        });

        picWrap.addEventListener('click', function (event) {
          if (event.target.className == 'far fa-times-circle' || event.target == this) {
            picWrap.style.transform = 'scale(0)';
            imgBig.remove();
          }
        })
      }

    });

    for (var i = 0; i < gallItem.length; i++) {
      gallItem[i].className = "gall-item revealator-slideup";
    }

  })();

}