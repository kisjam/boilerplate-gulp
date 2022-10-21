// const $ = require("jquery");
import $ from 'jquery';

interface Option {
	selector: string;
	headerSelector: string;
	bodySelector: string;
	duration: number;
}

interface CustonOption {
	selector?: string;
	headerSelector: string;
	bodySelector: string;
	duration: number;
}

export default class Accordion {

	option: Option;

	constructor(customOption?: CustonOption) {

		const defaultOption: Option = {
			selector: '[data-accordion]',
			headerSelector: '[data-accordion-header]',
			bodySelector: '[data-accordion-body]',
			duration: 400
		}

		this.option = { ...defaultOption, ...customOption };

		document.addEventListener('DOMContentLoaded', () => {
			const elems = document.querySelectorAll<HTMLDetailsElement>(this.option.selector);

			elems?.forEach((elem) => {
				this.registEventHandler(elem);
			})
		})
	}
	registEventHandler(elem: HTMLDetailsElement): void {

		const headerElem = elem.querySelector<HTMLElement>(this.option.headerSelector);

		headerElem?.addEventListener('click', (e) => {
			e.preventDefault();

			if (elem.open) {
				$(this.option.bodySelector).stop().slideUp(this.option.duration, () => elem.open = false);
			} else {
				elem.open = true;
				$(this.option.bodySelector).stop().slideDown(this.option.duration);
			}
		})
	}
}
