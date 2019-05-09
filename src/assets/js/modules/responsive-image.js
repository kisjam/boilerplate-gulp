const Utility = require('./utility');
const u = new Utility();

class ResponsiveImage {
	constructor() {
		const elems = document.querySelectorAll('[data-sp]');
		const elem = Array.prototype.slice.call(elems, 0);
		this.init(elem);
	}
	init(elem) {

		elem.forEach((val) => {
			const _srcSp = val.getAttribute('data-sp');
			const _srcOrigin = val.getAttribute('src');
			u.mq.addListener(changeImage);
			changeImage();

			function changeImage() {
				if (u.mq.matches) {
					val.setAttribute('src', _srcOrigin)
				} else {
					val.setAttribute('src', _srcSp)
				}
			}
		});
	}
}

module.exports = ResponsiveImage;
