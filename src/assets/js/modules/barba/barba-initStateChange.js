import Barba from "barba.js";

export function barbaInitStateChange () {

	Barba.Dispatcher.on('initStateChange', function() {

		if (typeof ga === 'function') {

			ga('send', 'pageview', location.pathname);

		}

	});

}
