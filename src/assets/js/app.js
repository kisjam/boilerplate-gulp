import $ from 'jquery';
window.jQuery = $;
import ResponsiveImage from './modules/responsive-image';
import ScrollAnimation from './modules/scroll-animation';
import mobileNavigation from './modules/mobile-menu';
import './modules/smooth-scroll';
import throttle from 'lodash.throttle';
import 'slick-carousel'
require("@fancyapps/fancybox");

window.addEventListener('DOMContentLoaded', () => {

	new ResponsiveImage();

	mobileNavigation.init();
	$.smoothScroll();

	const sa = document.querySelectorAll('.sa');
	new ScrollAnimation(sa);

	$('.slick').slick();

	// window.addEventListener('scroll', throttle(function() {
	// 	console.log('throttle');
	// }, 1000));

});
