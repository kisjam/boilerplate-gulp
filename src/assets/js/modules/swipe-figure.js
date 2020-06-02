import $ from 'jquery';

export default class SwipeFigure {
	constructor(config) {

		this.config = {
			selector: '.swipe-image',
			touchedClass: '-is-touched',
		}

		$.extend(this.config, config);

		this.elem = document.querySelector(this.config.selector);
		this.touchedClass = this.config.touchedClass;

		if (this.elem) {
			this.registerEventHandler();
		}

	}
	registerEventHandler() {

		let self = this;

		self.elem.addEventListener('touchstart', function () {
			this.classList.add(self.touchedClass);
		});
	}
}