const $ = require('jquery');
const Utility = require('./utility');
const u = new Utility();

module.exports = class ScrollAnimation {
  constructor( elems ) {
		const self = this;
		const elem = Array.prototype.slice.call(elems, 0);

		elem.forEach(( elem ) => {
			self.init( elem );
		})
	}
	init( elem ) {

		elem.targetPosY = $(elem).offset().top;

		window.addEventListener('scroll', scrollEvent);
		window.addEventListener('load', scrollEvent);
		scrollEvent();

		function scrollEvent() {
			if ( u.wy + u.wh * 0.8 > elem.targetPosY ) {
				window.removeEventListener('scroll', scrollEvent);
				elem.classList.add("-init");
			}
		}
	}
}
