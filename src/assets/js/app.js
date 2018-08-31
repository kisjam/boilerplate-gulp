
import $ from 'jquery';
import ResponsiveImage from './modules/responsive-image';
import ScrollAnimation from './modules/scroll-animation';
import mobileNavigation from './modules/mobile-menu';
import './modules/smooth-scroll';
import throttle from 'lodash.throttle';
import Tweenmax from 'gsap';

window.addEventListener('DOMContentLoaded', () => {

	new ResponsiveImage();

	mobileNavigation.init();
	$.smoothScroll();

	const sa = document.querySelectorAll('.sa');
	new ScrollAnimation(sa);

	// window.addEventListener('scroll', throttle(function() {
	// 	console.log('throttle');
	// }, 1000));

});
