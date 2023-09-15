// Initialize swiper js

const swiperContainer = document.querySelector('.swiper-container');
const swiper = new Swiper('.swiper', {
	loop: true,

	autoplay: {
        	delay: 6000,
        	disableOnInteraction: false,
    	},
	speed: 2000,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


swiperContainer.addEventListener('mouseenter', () => {
	swiper.autoplay.stop();
});

swiperContainer.addEventListener('mouseleave', () => {
	swiper.autoplay.start();
});
