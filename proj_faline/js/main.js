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

console.log(close);