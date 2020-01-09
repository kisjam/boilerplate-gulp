const $ = require('jquery');
const Utility = require('./utility');
const u = new Utility();

var navStatus = {
	init: function() {

		var _posY = 0;
		var _nav = $('.site-header');
		var _isScroll = false;

		window.addEventListener('scroll', function() {
			if (u.wy > 100) {
				_nav.addClass('-scroll');
			} else {
				_nav.removeClass('-scroll');
			}
		});

	}
}
module.exports = navStatus;
