interface Option {
	buttonSelector: string;
	contentSelector: string;
}

interface CustonOption {
	buttonSelector: string;
	contentSelector: string;
}

export default class Tab {

	option: Option;

	constructor(selector: string = '[data-tab]', customOption?: CustonOption) {

		const defaultOption: Option = {
			buttonSelector: '[data-tab-target]',
			contentSelector: '[data-tab-content]'
		}

		this.option = { ...defaultOption, ...customOption };

		document.addEventListener('DOMContentLoaded', () => {
			const elems = document.querySelectorAll<HTMLElement>(selector);

			if (elems === null) return;

			elems.forEach((elem) => {
				this.registEventHandler(elem);
			})
		})
	}
	registEventHandler(elem: HTMLElement): void {

		const tabButtons = elem.querySelectorAll<HTMLButtonElement>(this.option.buttonSelector);
		const tabContents = elem.querySelectorAll<HTMLElement>(this.option.contentSelector);
		const rendar = (): void => {

			tabContents.forEach((content) => {
				content.classList.remove('-is-open');
			})
			const content = elem.querySelector(`[data-tab-content="${targetContent}"]`);
			content?.classList.add('-is-open');

			tabButtons.forEach((button) => {
				button.classList.remove('-is-active');
			})
			const target = elem.querySelector(`[data-tab-target="${targetContent}"]`);
			target?.classList.add('-is-active');
		}
		let targetContent: string | undefined;

		tabButtons.forEach((button) => {
			button.addEventListener('click', (e) => {
				e.preventDefault();
				targetContent = button.dataset.tabTarget;
				rendar();
			});
		})

		targetContent = tabButtons[0].dataset.tabTarget;
		rendar();

	}
}
