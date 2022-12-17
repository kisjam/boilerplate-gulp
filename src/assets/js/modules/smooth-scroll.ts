import u from "./utility";

interface Option {
	selector: string;
	ignoreSelector: string;
}
interface CustonOption {
	selector?: string;
	ignoreSelector?: string;
}

export default class SmoothScroll {

	option: Option;

	constructor(customOption?: CustonOption) {

		const defaultOption: Option = {
			selector: 'a[href^="#"]:not(.js-ignore-smooth)',
			ignoreSelector: ''
		}

		this.option = { ...defaultOption, ...customOption };

		document.addEventListener('DOMContentLoaded', () => {
			const anchors = document.querySelectorAll<HTMLAnchorElement>(this.option.selector + this.option.ignoreSelector);

			if (anchors === null) return;

			anchors.forEach((anchor) => {
				this.registEventHandler(anchor);
			})
		})
	}
	registEventHandler(elem: HTMLAnchorElement): void {
		elem.addEventListener('click', (e) => {
			e.preventDefault();

			const hash = elem.hash;
			if (hash === "#") return;

			const targetElem = document.querySelector<HTMLElement>(hash);
			if (targetElem === null) return;

			const targetElemRect = targetElem.getBoundingClientRect();

			window.scrollTo({
				top: targetElemRect.top - u.wy + u.scrollGap,
				left: 0,
				behavior: 'smooth'
			});

		});
	}

}
