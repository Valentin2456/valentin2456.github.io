function fescht() {
	const image = document.querySelector('.val-logo');
	const navbar = document.querySelector('.navbar');
	image.src = "./resources/babyshark.gif";

	let duration = 20;
	let interval = setInterval(() => {
		const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
		navbar.style.boxShadow = `0 30px 30px -20px ${randomColor}`;
		duration--;
		if (duration <= 0) {
			clearInterval(interval);
			navbar.style.boxShadow = '0 10px 10px -10px #81B29A';
			image.src = "./resources/ah.png";
		}
	}, 500); 
}

function putain() {
	const audio = new Audio('./resources/axel.mp3');
	audio.play();
}