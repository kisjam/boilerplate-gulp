import Barba from "barba.js";
import TweenMax from "gsap";
const $ = require('jquery');

export function barbaBaseview() {

	var Common = Barba.BaseView.extend({
		namespace: 'common',
		onEnter: function() {

			if ( Barba.HistoryManager.history.length === 1 ) {
				var scrollEvent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';

				$(window).on('touchmove.noScroll', function(e) {
					e.preventDefault();
				});

				$(window).on(scrollEvent, function(e) {
					e.preventDefault();
				});
			}

		},
		onEnterCompleted: function() {
			window.addEventListener('load', function() {

					var scrollEvent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
					$(window).off('touchmove.noScroll');
					$(window).off(scrollEvent);

			})
		}
	});

	Common.init();

};
