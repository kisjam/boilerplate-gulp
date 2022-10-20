import u from "./utility";

const initDisplayPosition = (): void => {

	const hash: string = window.location.hash;

	if (hash === '') return;

	window.location.hash = hash + '_';

	window.addEventListener('load', (): void => {
		const targetElem = document.querySelector<HTMLElement>(hash);

		if (targetElem === null) return;

		setTimeout(() => {
			window.scrollTo(0, targetElem.offsetTop + u.scrollGap);
		}, 1);

		window.location.hash = hash;
	});
}

export default initDisplayPosition;
