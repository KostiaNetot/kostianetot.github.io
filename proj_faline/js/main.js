/*-----Appearence of Modal Window-----*/
var modal = document.querySelector('#modal');
var lessonBtn = document.querySelector('#lesson-btn');
var close = document.querySelector('#close');

lessonBtn.onclick = function () {
	modal.style.display = 'block';
}
close.onclick = function () {
	modal.style.display = 'none';
}
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';	
	}
}

/*------TextArea Translate-------*/
var modalContent = document.querySelector('.modal-content');
var textAr = document.querySelector('#textarea');
textAr.addEventListener('focus', transUp);

function transUp() {
	modalContent.style.transform = 'translateY(-50%)';
}
window.onclick = function (event) {
	if (event.target == modal) {
		modalContent.style.transform = 'translateY(0)';	
	}
}