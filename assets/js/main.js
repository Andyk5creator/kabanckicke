const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerView: 3,
	spaceBetween: 16,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		566.98: {
			slidesPerView: 2,
		},
		991.98: {
			slidesPerView: 3,
		}
	},
});