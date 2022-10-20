const disableButtonClick = (selector: string = '[data-disable-doubleclick]'): void => {

	const buttons = document.querySelectorAll<HTMLButtonElement>(selector);

	buttons.forEach((btn) => {
		btn.addEventListener('click', () => {
			btn.disabled = true;
		});
	})

}
export default disableButtonClick;
