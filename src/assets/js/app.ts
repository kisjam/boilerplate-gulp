import initDisplayPosition from "./modules/init-display-position";
import SmoothScroll from "./modules/smooth-scroll";
import ScrollAnimation from "./modules/scroll-animation";
import SwipeFigure from "./modules/swipe-figure";
import CheckScrolled from "./modules/check-scrolled";
import NavManager from "./modules/nav-manager";
import Accordion from "./modules/accordion";
import Tab from "./modules/tab";

new ScrollAnimation();
new SwipeFigure();
new CheckScrolled();
new SmoothScroll();
new NavManager({
	menuSelector: ".site-header__nav",
});

const accordionEls = document.querySelectorAll("[data-accordion]");
accordionEls.forEach((accordionEl) => {
	if (accordionEl instanceof HTMLButtonElement) {
		new Accordion(accordionEl);
	} else {
		console.warn("Invalid element type for Accordion:", accordionEl);
	}
});

new Tab();

initDisplayPosition();
