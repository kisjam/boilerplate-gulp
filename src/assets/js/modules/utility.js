/*
 *
 * utility.js
 *
 */

class Utility {
	constructor() {
		this.breakpoint = {
			sp: 768,
			tablet: 960
		}

		window.addEventListener('resize', this.setValue);
		window.addEventListener('DOMContentLoaded', this.setValue);
		this.addEvent();
	}
	setValue() {
		this.wh = this.innerHeight;
		this.ww = this.innerWidth;
		// console.log('wh:' + this.wh)
		// console.log('ww:' + this.ww)
	}
	// get isMobileVp() {
	// 	return true;
	// }
	addEvent() {
		let self = this;
		if (matchMedia) {
			self.mq = window.matchMedia("(min-width: " + this.breakpoint.sp + "px)");
	  	// self.mq.addListener(changeViewport);
			self.mq.addListener(changeViewport);
	  	changeViewport(self.mq);
		}
		function changeViewport(mq) {
		  if (self.mq.matches) {
				self.isMobileVp = false;
		  } else {
				self.isMobileVp = true;
		  }
		}
	}
}

module.exports = Utility;
