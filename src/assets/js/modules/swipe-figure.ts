interface Option {
	selector: string;
	scrolledClass: string;
}

interface CustonOption {
	selector?: string;
	scrolledClass?: string;
}

export default class SwipeFigure {

	option: Option;

	constructor(customOption?: CustonOption) {

		const defaultOption: Option = {
			selector: '.js-swipe',
			scrolledClass: '-scrolled'
		}

		this.option = { ...defaultOption, ...customOption };

		document.addEventListener('DOMContentLoaded', () => {
			const elems = document.querySelectorAll<HTMLElement>(this.option.selector);

			if (elems === null) return;

			elems.forEach((elem) => {
				this.registEventHandler(elem);
			})
		})

	}
	registEventHandler(elem: HTMLElement) {

		elem.classList.add('swipe');

		const scrollEvent = () => {
			elem.removeEventListener('scroll', scrollEvent);
			elem.classList.add(this.option.scrolledClass);
		}

		elem.addEventListener('scroll', scrollEvent);

	}
}
