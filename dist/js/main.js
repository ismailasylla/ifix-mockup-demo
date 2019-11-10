let productImages = [
	'iphone-11-black',
	'iphone-11-white',
	'iphone-11-green',
	'iphone-11-yellow',
	'iphone-11-purple',
	'iphone-11-red'
];
let imgPro = document.querySelector('.imgPro img');
let allCollors = document.querySelectorAll('.allColors li');

allCollors.forEach((colors) =>
	colors.addEventListener('click', function(elem) {
		// remove active class when a product is selected selected
		for (let i = 0; i < allCollors.length; i++) {
			allCollors[i].classList.remove('active');
		}
		if (this.className === 'black') {
			imgPro.src = 'images/' + productImages[0] + '.jpg';
			imgPro.classList.add('animate');
		}
		if (this.className === 'white') {
			imgPro.src = 'images/' + productImages[1] + '.jpg';
			imgPro.classList.add('animate');
		}
		if (this.className === 'green') {
			imgPro.src = 'images/' + productImages[2] + '.jpg';
			imgPro.classList.add('animate');
		}
		if (this.className === 'yellow') {
			imgPro.src = 'images/' + productImages[3] + '.jpg';
			imgPro.classList.add('animate');
		}
		if (this.className === 'purple') {
			imgPro.src = 'images/' + productImages[4] + '.jpg';
			imgPro.classList.add('animate');
		}
		if (this.className === 'red') {
			imgPro.src = 'images/' + productImages[5] + '.jpg';
			imgPro.classList.add('animate');
		}
		// Activate class active when color is clicked
		this.classList.add('active');

		setTimeout(function() {
			imgPro.classList.remove('animate');
		}, 500);
	})
);

/* pages effects */

window.sr = ScrollReveal();
sr.reveal('.navbar', {
	duration: 2000,
	origin: 'bottom'
});
sr.reveal('.showcase-left', {
	duration: 2000,
	origin: 'top',
	distance: '300px'
});
sr.reveal('.showcase-right', {
	duration: 2000,
	origin: 'right',
	distance: '300px'
});
sr.reveal('.showcase-btn', {
	duration: 2000,
	delay: 2000,
	origin: 'bottom'
});
sr.reveal('#testimonial div', {
	duration: 2000,
	origin: 'bottom'
});
sr.reveal('.info-left', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	viewFactor: 0.2
});
sr.reveal('.info-right', {
	duration: 2000,
	origin: 'right',
	distance: '300px',
	viewFactor: 0.2
});

$(function() {
	// Smooth Scrolling
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate(
					{
						scrollTop: target.offset().top
					},
					1000
				);
				return false;
			}
		}
	});
});

// scroll to top

$(document).ready(function() {
	$('body').append('<div id="toTop" class="btn btn-info"><span class="fa fa-arrow-circle-up"></span> Top</div>');
	$(window).scroll(function() {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('html, body').animate({ scrollTop: 0 }, 600);
		return false;
	});
});
