import 'jquery';
import '@popperjs/core';
import 'bootstrap';
import Swiper from 'swiper/swiper-bundle.min';


//Disable dropdown hide during inside click
$('[data-bs-disable-inside="true"]').closest('.dropdown').find('.dropdown-menu').click(function (e) {
	e.stopPropagation();
});


//Close navigation on outside click
$(document).click(function (event) {
	let clickedElement = $(event.target),
		isNavbarOpen = $(".navbar-collapse").hasClass("show");
	if (isNavbarOpen === true && !clickedElement.hasClass("navbar-toggler")) {
		$(".navbar-toggler").click();
	}
});



//Banner slider
new Swiper('.banner-slider', {
	loop: true,
	autoplay: {
		delay: 3500,
	},
	allowTouchMove: false,
	effect: 'fade',
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	navigation: {
		nextEl: '.banner-slider .swiper-button-next',
		prevEl: '.banner-slider .swiper-button-prev',
	}
});


//Product Slider
new Swiper('.product-slider', {
	slidesPerView: 1,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	breakpoints: {
		576: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 30
		}
	}
});