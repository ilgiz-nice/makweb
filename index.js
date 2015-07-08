var array = ['images/citymarket.png', 'images/keravt.jpg', 'images/gku.jpg', 'images/plazma.jpg', 'images/contrastm.jpg', 'images/gktransmash.jpg'];
function animation() {
	value = document.getElementById('animation').getAttribute('src');
	index = array.indexOf(value);
	if (index >= 0 && index < array.length - 1) {
		next = array[index + 1]
	}
	else {
		next = array[0]
	}
	document.getElementById('animation').setAttribute('src', next);
	setTimeout(animation, 5000);
}
setTimeout(animation, 5000);