export default class Accordion {
	buttonEl: HTMLButtonElement;
	panelEl: HTMLElement;
	closeButtonEl: HTMLButtonElement | null;
	isAnimating: boolean;
	constructor(domNode: HTMLButtonElement) {
		this.buttonEl = domNode;
		this.isAnimating = false;

		const panelId = this.buttonEl.getAttribute("data-accordion");
		if (!panelId) {
			throw new Error(
				"Accordion button does not have a 'data-accordion' attribute."
			);
		}

		const isExpanded = this.buttonEl.getAttribute("aria-expanded") || "false";

		this.buttonEl.setAttribute("aria-expanded", isExpanded);
		this.buttonEl.setAttribute("aria-controls", panelId);

		const panelEl = document.querySelector(`#${panelId}`);
		if (!panelEl) {
			throw new Error(`Element with ID "${panelId}" was not found.`);
		}
		this.panelEl = panelEl as HTMLElement;

		this.panelEl.setAttribute("aria-labelledby", this.buttonEl.id);
		this.panelEl.setAttribute(
			"aria-hidden",
			isExpanded === "true" ? "false" : "true"
		);
		this.panelEl.style.display = isExpanded === "true" ? "block" : "none";
		this.closeButtonEl = this.panelEl.querySelector("[data-accordion-close]");

		this.closeButtonEl?.addEventListener("click", (e) => {
			e.preventDefault();
			this.closePanel();
		});

		this.buttonEl.addEventListener("click", (e) => {
			e.preventDefault();

			if (this.buttonEl.getAttribute("aria-expanded") === "true") {
				this.closePanel();
			} else {
				this.openPanel();
			}
		});
	}
	closePanel(): void {
		if (this.isAnimating) return;

		this.buttonEl.setAttribute("aria-expanded", "false");
		this.buttonEl.classList.remove("-is-expanded");
		this.panelEl.setAttribute("aria-hidden", "true");
		this.slideUp(this.panelEl);
	}
	openPanel(): void {
		if (this.isAnimating) return;

		this.buttonEl.setAttribute("aria-expanded", "true");
		this.buttonEl.classList.add("-is-expanded");
		this.panelEl.setAttribute("aria-hidden", "false");
		this.slideDown(this.panelEl);
	}
	slideUp(element: HTMLElement, duration: number = 500): void {
		this.isAnimating = true;
		element.style.height = `${element.offsetHeight}px`;
		element.offsetHeight;
		element.style.overflow = "hidden";
		element.style.transitionProperty = "height, margin, padding";
		element.style.transitionDuration = `${duration}ms`;
		element.style.height = "0";
		element.style.paddingTop = "0";
		element.style.paddingBottom = "0";
		element.style.marginTop = "0";
		element.style.marginBottom = "0";

		const slideUpCallback = () => {
			element.style.display = "none";
			element.style.removeProperty("height");
			element.style.removeProperty("padding-top");
			element.style.removeProperty("padding-bottom");
			element.style.removeProperty("margin-top");
			element.style.removeProperty("margin-bottom");
			element.style.removeProperty("overflow");
			element.style.removeProperty("transition-duration");
			element.style.removeProperty("transition-property");
			this.isAnimating = false;
			element.removeEventListener("transitionend", slideUpCallback);
		};

		element.addEventListener("transitionend", slideUpCallback);
	}

	slideDown(element: HTMLElement, duration: number = 500): void {
		this.isAnimating = true;
		element.style.removeProperty("display");
		let display = window.getComputedStyle(element).display;

		if (display === "none") display = "block";

		element.style.display = display;
		let height = element.offsetHeight;
		element.style.overflow = "hidden";
		element.style.height = "0";
		element.style.paddingTop = "0";
		element.style.paddingBottom = "0";
		element.style.marginTop = "0";
		element.style.marginBottom = "0";
		element.offsetHeight;
		element.style.transitionProperty = "height, margin, padding";
		element.style.transitionDuration = `${duration}ms`;
		element.style.height = `${height}px`;

		const slideDownCallback = () => {
			element.style.removeProperty("height");
			element.style.removeProperty("padding-top");
			element.style.removeProperty("padding-bottom");
			element.style.removeProperty("margin-top");
			element.style.removeProperty("margin-bottom");
			element.style.removeProperty("overflow");
			element.style.removeProperty("transition-duration");
			element.style.removeProperty("transition-property");
			this.isAnimating = false;
			element.removeEventListener("transitionend", slideDownCallback);
		};

		element.addEventListener("transitionend", slideDownCallback);
	}
}
