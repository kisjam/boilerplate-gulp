/*
 *
 * utility.js
 *
 */

module.exports = class Utility {
	constructor() {
		this.ua = navigator.userAgent;
		this.breakpoint = {
			sp: 769,
			tablet: 960
		}

		if (this.ua.indexOf("iPhone") >= 0 || this.ua.indexOf("iPad") >= 0 || this.ua.indexOf("Android") >= 0) {
			this.isMobile = true;
		} else {
			this.isMobile = false;
		}

		if (this.isMobile) {
			this.resizeEvent = 'orientationchange';
		} else {
			this.resizeEvent = 'resize';
		}

		this.addResponsiveEvent();
		this.updateValue();
	}
	updateValue() {
		let self = this;
		window.addEventListener('resize', setWindowSize);
		window.addEventListener('DOMContentLoaded', setWindowSize);

		function setWindowSize() {
			self.wh = this.innerHeight;
			self.ww = this.innerWidth;
		}

		window.addEventListener('scroll', setOffset);
		window.addEventListener('DOMContentLoaded', setOffset);

		function setOffset() {
			self.wy = document.documentElement.scrollTop || document.body.scrollTop;
		}

		self.mq.addListener(changeViewport);
		changeViewport(self.mq);

		function changeViewport(mq) {
		  if (self.mq.matches) {
				self.isMobileVp = false;
		  } else {
				self.isMobileVp = true;
		  }
		}
	}
	addResponsiveEvent() {
		this.mq = window.matchMedia("(min-width: " + this.breakpoint.sp + "px)");
	}
}
