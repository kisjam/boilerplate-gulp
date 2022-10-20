const $ = require("jquery");

interface Option {
	selector: string;
	duration: number;
}

interface CustonOption {
	selector?: string;
	duration?: number;
}

export default class Accordion {

	option: Option;

	constructor(customOption?: CustonOption) {

		const defaultOption: Option = {
			selector: '[data-accordion]',
			duration: 400
		}

		this.option = { ...defaultOption, ...customOption };

		document.addEventListener('DOMContentLoaded', () => {
			const elems = document.querySelectorAll<HTMLDetailsElement>(this.option.selector);

			if (elems === null) return;

			elems.forEach((elem) => {
				this.registEventHandler(elem);
			})
		})
	}
	registEventHandler(elem: HTMLDetailsElement): void {

		const headerElem = elem.querySelector('[data-accordion-header]');
		const bodyElem = elem.querySelector('[data-accordion-body]');

		headerElem?.addEventListener('click', (e) => {
			e.preventDefault();

			if (elem.open) {
				$(bodyElem).stop().slideUp(this.option.duration, () => elem.open = false);
			} else {
				elem.open = true;
				$(bodyElem).stop().slideDown(this.option.duration);
			}
		})
	}
}
