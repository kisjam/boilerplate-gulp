const $ = require('jquery');
let origin = require('./utility');

var mobileNavigation = {
	init: function() {
		var _nav = $('.nav');
		var _navBtn = $('.nav__btn');
		var _navGlobal = $('.nav__global');
		var _navCloseBtn = $('.nav__global__item--close');
		var _isActive = false;

		_navBtn.on('click', function() {
			if (!_isActive) {
				_isActive = true;
				_nav.addClass('nav--active');
			} else if (_isActive) {
				_isActive = false;
				_nav.removeClass('nav--active');
			}
		})
		_navCloseBtn.on('click', function() {
			_isActive = false;
			_nav.removeClass('nav--active');
		})
	}
}

module.exports = mobileNavigation;
