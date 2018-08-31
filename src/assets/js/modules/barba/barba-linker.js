import Barba from "barba.js";

export function barbaLinker() {

	var sameLinks = document.querySelectorAll('a[href]');

	var cancelTransition = function(e) {

		if (e.currentTarget.href === window.location.href) {

			e.preventDefault();
			e.stopPropagation();

		}
	};

	for (var i = 0; i < sameLinks.length; i++) {

		sameLinks[i].addEventListener('click', cancelTransition);

	}

};
