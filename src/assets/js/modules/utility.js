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

		this.addResponsiveEvent();
		this.updateValue();
	}
	updateValue() {
		let self = this;
		window.addEventListener('resize', setValue);
		window.addEventListener('DOMContentLoaded', setValue);

		function setValue() {
			self.wh = this.innerHeight;
			self.ww = this.innerWidth;
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
		let self = this;
		if (matchMedia) {
			self.mq = window.matchMedia("(min-width: " + this.breakpoint.sp + "px)");
		}
	}
}
