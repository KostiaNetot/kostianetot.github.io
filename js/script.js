/*-----------------HEADER SLIDER--------------------------*/
(function() {
	let headSlides = document.querySelectorAll('.head-slide');
	let currentSlide = 0;

	setInterval(changeSlide, 5000);

	function changeSlide() {
		headSlides[currentSlide].className = 'head-slide';
		currentSlide = (currentSlide+1)%headSlides.length;
		headSlides[currentSlide].className = 'head-slide showing';
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

/*-----------------ANIMATE CSS BIOGR --------------------------*/
(function () {
	let header = document.querySelector('header');
	let bioItem1 = document.querySelector('#anim-col1');
	let bioItem2 = document.querySelector('#anim-col2');
	let bioItem3 = document.querySelector('#anim-col3');
	let scrolled = window.pageYOffset || document.documentElement.scrollTop;

	window.onscroll = function() {
		
		if (scrolled < header.offsetHeight) {
			bioItem1.className = 'animated slideInLeft';
			bioItem1.style.opacity = 1;	
		}
		if (scrolled < (header.offsetHeight+bioItem1.parentElement.offsetHeight)) {
			bioItem2.className = 'animated slideInUp';
			bioItem2.style.opacity = 1;
			bioItem3.className = 'animated slideInRight';
			bioItem3.style.opacity = 1;
		}
	}
})();
/*---
(function () {
//твой код
})(); 
---*/