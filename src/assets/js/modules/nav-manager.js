import $ from 'jquery';

export default class NavManager {
	constructor(config) {
		this.foreachPolyfill();

		this.config = {
			navSelector: '.nav-global',
			navParentItemSelector: '.nav-global__list__item > span',
			headerSelector: '.site-header',
			navButtonSelector: '.nav-btn',
			openClass: '-active',
			scrolledClass: '-scrolled',
			intervalSpeed: 100,
		}

		$.extend(this.config, config);

		this.isNavOpen = false;
		this.bodyElem = document.querySelector('body');
		this.navElem = document.querySelector(this.config.navSelector);
		this.navButtonElem = document.querySelector(this.config.navButtonSelector);
		this.headerElem = document.querySelector(this.config.headerSelector);
		this.navParentItemElem = document.querySelectorAll(this.config.navParentItemSelector);
		this.windowY = $(window).scrollTop();
		this.headerH = $(this.headerElem).height();

		if (this.navElem == null) {
			return
		}

		this.registerEventHandler();

		setInterval(() => {
			this.rendar();
			this.update();
		}, this.config.intervalSpeed);

	}
	registerEventHandler() {

		let self = this;

		this.navButtonElem.addEventListener('click', () => {
			event.preventDefault();

			if (this.isNavOpen) {
				self.navClose();
			} else {
				self.navOpen();
			}
		});

		this.navParentItemElem.forEach((elem) => {
			elem.addEventListener('click', () => {
				event.preventDefault();
				$(elem).next('.nav-global__child-list').stop().slideToggle();
				elem.classList.toggle(self.config.openClass);
			})
		})

	}
	update() {
		this.windowY = $(window).scrollTop();
	}
	rendar() {
		if (this.windowY > this.headerH) {
			this.headerElem.classList.add(this.config.scrolledClass);
		} else {
			this.headerElem.classList.remove(this.config.scrolledClass);
		}
	}
	navOpen() {
		this.isNavOpen = true;
		this.navElem.classList.add(this.config.openClass);
		this.navButtonElem.classList.add(this.config.openClass);
		this.bodyElem.classList.add(this.config.openClass);
	}
	navClose() {
		this.isNavOpen = false;
		this.navElem.classList.remove(this.config.openClass);
		this.navButtonElem.classList.remove(this.config.openClass);
		this.bodyElem.classList.remove(this.config.openClass);
	}
}