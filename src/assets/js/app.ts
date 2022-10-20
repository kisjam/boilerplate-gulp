import disableButtonDoubleclick from './modules/disable-button-doubleclick';
import initDisplayPosition from './modules/init-display-position';
import SmoothScroll from './modules/smooth-scroll';
import ScrollAnimation from './modules/scroll-animation';
import SwipeFigure from './modules/swipe-figure';
import CheckScrolled from './modules/check-scrolled';
import NavManager from './modules/nav-manager';
import Accordion from './modules/accordion';
import Tab from './modules/tab';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

import { Fancybox } from "@fancyapps/ui";

new ScrollAnimation;
new SwipeFigure;
new CheckScrolled;
new SmoothScroll;
new NavManager;
new Accordion;
new Tab;

initDisplayPosition();

const swiper = new Swiper('.my-swiper', {
	modules: [Navigation, Pagination, Autoplay],
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

Fancybox.bind("[data-fancybox]", {
});

document.addEventListener('DOMContentLoaded', () => {

	disableButtonDoubleclick();

})
