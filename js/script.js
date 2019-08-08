/*-----------------HEADER SLIDER--------------------------*/
(function() {
	if (document.querySelector('#main-page')) {
    let headSlides = document.querySelectorAll('.head-slide');
    let currentSlide = 0;

    setInterval(changeSlide, 5000);

    function changeSlide() {
    	headSlides[currentSlide].className = 'head-slide';
    	currentSlide = (currentSlide+1)%headSlides.length;
    	headSlides[currentSlide].className = 'head-slide showing';
    }
	}
}());


/*-----------------BURGER------------------------------*/
(function() {
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

		document.onscroll = function() {
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

					function changePics() {
						for (let i=0; i<images.length; i++) {
							images[i].classList.add('opacity0');
						}
						images[count].classList.remove('opacity0');
					}
					changePics();

					btnPrev.addEventListener('click', function () {
						if (count-1 == -1) {
							count = images.length-1;
						}
						else {
							count--;
						}
						changePics();
					});
					btnNext.addEventListener('click', function () {
						if (count+1 == images.length) {
							count = 0;
						}
						else {
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
				let picBox = document.querySelector('.box-picture');

						gallCont.addEventListener('click', function(e){
							let target = e.target;
							let imgBig = document.createElement('img');

							if(target.tagName == 'IMG') {
								picWrap.style.transform = 'scale(1)';
								picBox.appendChild(imgBig);

								imgBig.src = 'img/gallery/12.jpg';
								console.log('works!');
							}
						});

				for (var i = 0; i < gallItem.length-1; i++) {
						gallItem[i].className = "gall-item revealator-slideup";
					}	

			})(); 	

		}
		



	// class="gall-item revealator-slideup"