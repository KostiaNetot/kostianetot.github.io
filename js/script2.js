/*-----------------HEADER SLIDER--------------------------*/
(function() {
	if (window.location.pathname == 'index.html') {
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
// (function() {
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
// 	}	
// }());

/*-----------------ANIMATE CSS BIOGR --------------------------*/
// (function () {
// 	let header = document.querySelector('header');
// 	let bioItem1 = document.querySelector('#anim-col1');
// 	let bioItem2 = document.querySelector('#anim-col2');
// 	let bioItem3 = document.querySelector('#anim-col3');
// 	let scrolled = window.pageYOffset || document.documentElement.scrollTop;

// 	document.onscroll = function() {
		
// 		if (scrolled < header.offsetHeight) {
// 			bioItem1.className = 'bio-item animated slideInLeft';
// 			bioItem1.style.opacity = 1;	
// 		}
// 		if (scrolled < (header.offsetHeight+bioItem1.parentElement.offsetHeight)) {
// 			bioItem2.className = 'bio-item animated slideInUp';
// 			bioItem2.style.opacity = 1;
// 			bioItem3.className = 'bio-item animated slideInRight';
// 			bioItem3.style.opacity = 1;
// 		}
// 	}
// })();

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
		// if (window.location.pathname == 'index.html') {

		// }

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
			console.log('test');
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

	})();

		

/*----------------- GALLERY PAGE --------------------------*/
// (function () {
// 	console.log('test');
// })();

/*---
(function () {
//твой код
})(); 
---*/