const $ = require('jquery');
let origin = require('./utility');

var navStatus = {
	init: function() {
		var _posY = 0;
		var _nav = $('.header');
		var _isScroll = false;
		origin.$window.on('scroll', function() {
			_posY = $(this).scrollTop();
			if (_posY > 10) {
				if (_isScroll) return;
				_isScroll = true;
				_nav.addClass('header--scroll');
			} else {
				if (!_isScroll) return;
				_isScroll = false;
				_nav.removeClass('header--scroll');
			}
		})
	}
}

module.exports = navStatus;
