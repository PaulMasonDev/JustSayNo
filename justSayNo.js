var sound = document.querySelectorAll("audio");
var img = document.querySelectorAll("img");

for (i = 0; i < img.length; i++) {
	img[i].addEventListener("click", function() {
		var randomIndex = Math.floor(Math.random() * sound.length);
		sound[randomIndex].play();
	});			
}


















// Mode 1: When an image is clicked, play a random sound

// Mode 2: Play a set sound on each image

// Change between modes

// Graphical responses