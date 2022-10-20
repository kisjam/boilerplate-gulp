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

export default class ScrollAnimation {

	option: Option;

	constructor(customOption?: CustonOption) {

		const defaultOption: Option = {
			selector: '.js-sa',
			fireClass: '-run',
			fireRange: 0.8
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
	registEventHandler(elem: HTMLElement): void {

		const rendar = () => {
			let targetPosY = elem.offsetTop;

			if (u.wy + u.wh * this.option.fireRange > targetPosY) {
				window.removeEventListener('scroll', rendar);
				elem.classList.add(this.option.fireClass);
			}
		}

		window.addEventListener('DOMContentLoaded', rendar);
		window.addEventListener('scroll', rendar);
		rendar();
	}
}
