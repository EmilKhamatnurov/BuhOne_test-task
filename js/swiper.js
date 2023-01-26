new Swiper('.main__swiper', {
	// Optional parameters
	loop: true,
	autoplay: {
		delay: 5000,
	  },
	autoHeight: false,
	speed:1000,
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