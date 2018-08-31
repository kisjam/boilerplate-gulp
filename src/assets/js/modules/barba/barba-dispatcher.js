import Barba from "barba.js";
import {changeHead} from './barba-head.js';

export function barbaDispatcher () {

	Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, barbaContainer, newPageRawHTML) {

		changeHead(currentStatus, oldStatus, barbaContainer, newPageRawHTML);

		history.scrollRestoration = 'manual';

		// if (currentStatus.namespace == 'top') {}
	})

}
