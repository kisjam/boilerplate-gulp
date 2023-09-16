import u from "./utility";

interface Option {
	menuSelector: string;
	menuButtonSelector: string;
	menuAvtiveClass: string;
	hiddenSelector: string;
}

interface CustonOption {
	menuSelector?: string;
	menuButtonSelector?: string;
	menuAvtiveClass?: string;
	hiddenSelector?: string;
}

export default class NavManager {
	option: Option;
	isMenuActive: Boolean = false;
	menuButtonElem: HTMLElement | null = null;
	menuElem: HTMLElement | null = null;
	hiddenElems: NodeListOf<HTMLElement> | null = null;
	prevPosY: number = 0;

	constructor(customOption?: CustonOption) {
		const defaultOption: Option = {
			menuSelector: ".site-menu",
			menuButtonSelector: ".site-menu-button",
			menuAvtiveClass: "-is-open",
			hiddenSelector: ".site-main, .site-footer, .site-cv",
		};

		this.option = { ...defaultOption, ...customOption };

		document.addEventListener("DOMContentLoaded", () => {
			this.menuButtonElem = document.querySelector<HTMLElement>(
				this.option.menuButtonSelector
			);
			this.menuElem = document.querySelector<HTMLElement>(
				this.option.menuSelector
			);
			this.hiddenElems = document.querySelectorAll<HTMLElement>(
				this.option.hiddenSelector
			);

			if (this.menuButtonElem === null) return;

			this.menuButtonElem.addEventListener("click", () => {
				this.isMenuActive = !this.isMenuActive;
				this.rendar();
			});
			u.mq.addEventListener("change", (e) => {
				if (!e.matches) {
					this.closeMenu();
				}
			});
		});
	}
	closeMenu() {
		this.isMenuActive = false;
		this.rendar();
	}
	rendar() {
		if (
			this.menuButtonElem === null ||
			this.menuElem === null ||
			this.hiddenElems === null
		)
			return;

		if (this.isMenuActive) {
			this.menuButtonElem.classList.add(this.option.menuAvtiveClass);
			this.menuElem.classList.add(this.option.menuAvtiveClass);
			this.prevPosY = u.wy;
			this.hiddenElems.forEach((elem) => {
				elem.classList.add("hidden");
			});
		} else {
			this.menuButtonElem.classList.remove(this.option.menuAvtiveClass);
			this.menuElem.classList.remove(this.option.menuAvtiveClass);
			this.hiddenElems.forEach((elem) => {
				elem.classList.remove("hidden");
			});
			window.scrollTo(0, this.prevPosY);
		}
	}
}
