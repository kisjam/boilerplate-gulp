import u from "./utility";

const initDisplayPosition = (): void => {
	const hash: string = window.location.hash;

	if (hash === "") return;

	window.location.hash = hash + "_";

	window.addEventListener("load", (): void => {
		const targetElem = document.querySelector<HTMLElement>(hash);

		if (targetElem === null) return;

		setTimeout(() => {
			window.scrollTo(
				0,
				targetElem.getBoundingClientRect().top + u.wy + u.scrollGap
			);
		}, 10);

		history.replaceState(null, "", hash);
	});
};

export default initDisplayPosition;
