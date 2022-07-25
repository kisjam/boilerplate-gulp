import $ from 'jquery';
window.jQuery = $;
import ScrollAnimation from './modules/scroll-animation';
import './modules/smooth-scroll';
import 'slick-carousel'
import DisableDoubleclick from './modules/disable-doubleclick';
// require("@fancyapps/fancybox");

window.addEventListener('DOMContentLoaded', () => {

	new DisableDoubleclick;
	$.smoothScroll();
	const sa = document.querySelectorAll('.sa');
	new ScrollAnimation(sa);

	// $('.slick').slick();

});
