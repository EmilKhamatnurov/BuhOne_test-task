new Swiper('.main__swiper', {
	// Optional parameters
	loop: true,
	autoHeight: false,
	speed:300,
	spaceBetween: 20,
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