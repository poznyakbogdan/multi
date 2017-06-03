'use strict'

function setArrow(selector, type){
	let direct = (type === 'left') ? 'left' : 'right';
	return [
			'<div class="arrows-container ',
			`${selector}`,
			'">',
			'<button class="arrow-btn">',
			`<span class="glyphicon glyphicon-chevron-${direct}"></span>`,
			'</button>',
			'</div>'
		].join('');
};

$(document).ready(function(){
  $('.header-slider').slick({
    dots: true,
    appendDots: ".slider-dots",
    prevArrow: setArrow('prev-arrow', 'left'),
    nextArrow: setArrow('next-arrow', 'right'),
    autoplay: true,
    autoplaySpeed: 5000
  });
  $('.slick-dots li button').text("");
});