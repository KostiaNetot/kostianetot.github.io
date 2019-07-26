/*-----------------HEADER SLIDER--------------------------*/
let header = document.querySelector('header');
let headPics = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
let countHead = 0;
function headSlider () {
	
	if (countHead == headPics.length) {
		countHead = 0;
	}	
	header.style.background = `url(img/header/${headPics[countHead]}) center no-repeat`;
	header.style.backgroundSize = 'cover';
	countHead++;
}
headSlider();
setInterval(headSlider, 5000);

// let headSlider = document.querySelector('.head-slider');
// console.log(headSlider);

/*-----------------BURGER------------------------------*/
let burgerBtn = document.querySelector('.burger-btn');
burgerBtn.addEventListener('click', showMenu);

function showMenu() {
	let menu = document.querySelector('.list-navigation');
	menu.classList.toggle('list-navigation-show');
	burgerBtn.classList.toggle('btn-rotated');
}

/*-----------------SLIDER GALLERY--------------------------*/
let btnNext = document.querySelector('.next');
let btnPrev = document.querySelector('.prev');
let slideCont = document.querySelector('.galery-slider-cont');
let slideImgs = document.querySelectorAll('.slide-pic');
let count = 0;

// btnNext.addEventListener('click', scrollNext);

function scrollNext() {
	let ind = 0;
	if (ind < slideImgs.length-1) {
		count += 390;
		ind++;
		slideCont.style.transform = `translateX(-${count}px)`;	
	}
	else {
		ind = 0;
		slideCont.style.transform = `translateX(${count}px)`;
		count = 0;
	}	
}

/*-----------------ANIMATE CSS--------------------------*/
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
console.log(bioItem2);