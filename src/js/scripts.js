import 'jquery';
import '@popperjs/core';
import 'bootstrap';
import Swiper from 'swiper/swiper-bundle.min';


//Disable dropdown hide during inside click
$('[data-bs-disable-inside="true"]').closest('.dropdown').find('.dropdown-menu').click(function (e) {
	e.stopPropagation();
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



let shipping_address = $('#shipping_address'),
	shipping_same_cbox = $('#shipping_address_same');

shipping_same_cbox.change(function (e) {
	$(e.target).is(":checked") ? shipping_address.removeClass('d-none') : shipping_address.addClass('d-none');
});