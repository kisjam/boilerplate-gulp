import Barba from "barba.js";

import {barbaTransition} from './barba-transition.js';
import {barbaBaseview} from './barba-baseview.js';
import {barbaDispatcher} from './barba-dispatcher.js';
import {barbaLinker} from './barba-linker.js';
import {barbaInitStateChange} from './barba-initStateChange.js';

window.addEventListener('DOMContentLoaded', () => {
	Barba.Pjax.Dom.containerClass = 'site-container';
	Barba.Pjax.Dom.wrapperId = 'site-wrapper';

	barbaBaseview();
	barbaTransition();
	barbaDispatcher();
	barbaInitStateChange();
	Barba.Pjax.start();
});
