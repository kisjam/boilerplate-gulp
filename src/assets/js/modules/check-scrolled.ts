import u from './utility';

interface Option {
	selector: string;
	fireClass: string;
	fireRange: number;
}

interface CustonOption {
	selector?: string;
	fireClass?: string;
	fireRange?: number;
}

export default class CheckScrolled {

	option: Option;

	constructor(customOption?: CustonOption) {

		const defaultOption: Option = {
			selector: 'body',
			fireClass: '-scrolled',
			fireRange: 100
		}

		this.option = { ...defaultOption, ...customOption };

		document.addEventListener('DOMContentLoaded', () => {
			const bodyElem = document.querySelector<HTMLBodyElement>(this.option.selector);

			if (bodyElem === null) return;

			window.addEventListener('scroll', () => {

				if (u.wy < this.option.fireRange) {
					bodyElem.classList.remove(this.option.fireClass);
				} else {
					bodyElem.classList.add(this.option.fireClass);
				}
			})
		})
	}
}
