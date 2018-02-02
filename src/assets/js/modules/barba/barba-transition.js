import Barba from "barba.js";
import TweenMax from "gsap";
import mobileNavigation from './modules/mobile-menu';

export function barbaTransition () {

	var PageTransition = Barba.BaseTransition.extend({
		start: function() {

			var _this = this;

			Promise
				.all([this.newContainerLoading, this.transitionOut()])
				.then(this.transitionIn.bind(this));
		},

		transitionOut: function() {

			var deferred = Barba.Utils.deferred();

			const timeLine = new TimelineMax({ onComplete: transitionEnd });
			var _this = this;

			function transitionEnd() {

				mobileNavigation.close();
				deferred.resolve();

			}

			return deferred.promise;

		},

		transitionIn: function() {

			var _this = this;
			const timeLine = new TimelineMax();

			_this.done();

		}
	});

	Barba.Pjax.getTransition = function() {
		return PageTransition;
	};

};
