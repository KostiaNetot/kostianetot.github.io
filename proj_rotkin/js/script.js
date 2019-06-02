let btnNext = document.querySelector('.next');
let btnPrev = document.querySelector('.prev');
let slideCont = document.querySelector('.galery-slider-cont');
let slideImgs = document.querySelectorAll('.slide-pic');
let count = 0;

btnNext.addEventListener('click', scrollNext);


function scrollNext() {
	let ind = 0;
	console.log('qqq');
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