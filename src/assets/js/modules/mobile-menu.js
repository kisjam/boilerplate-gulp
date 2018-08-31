const $ = require('jquery');

var mobileNavigation = {
	init: function() {
		var _nav = $('.nav');
		var _navBtn = $('.nav__btn');
		var _navGlobal = $('.nav__global');
		var _navCloseBtn = $('.nav__global__item--close');
		this._isActive = false;
		var _self = this;

		_navBtn.on('click', function() {

			if (!_self._isActive) {
				_self._isActive = true;
				_nav.addClass('nav--active');
				_navBtn.addClass('nav__btn--active');
			} else if (_self._isActive) {
				_self._isActive = false;
				_nav.removeClass('nav--active');
				_navBtn.removeClass('nav__btn--active');
			}
		})
		_navCloseBtn.on('click', function() {
			_self._isActive = false;
			_nav.removeClass('nav--active');
			_navBtn.removeClass('nav__btn--active');
		})
	},
	close: function() {
		var _nav = $('.nav');
		var _navBtn = $('.nav__btn');
		this._isActive = false;
		_nav.removeClass('nav--active');
		_navBtn.removeClass('nav__btn--active');
	}
}

module.exports = mobileNavigation;
