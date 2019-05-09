const $ = require('jquery');

var mobileNavigation = {
	init: function() {
		var _nav = $('.nav');
		var _navBtn = $('.nav__btn');
		var _navGlobal = $('.nav__global');

		this._isActive = false;
		var _self = this;

		_navBtn.on('click', function() {

			if (!_self._isActive) {
				_self._isActive = true;
				_navGlobal.addClass('-active');
				_navBtn.addClass('-active');
			} else if (_self._isActive) {
				_self._isActive = false;
				_navGlobal.removeClass('-active');
				_navBtn.removeClass('-active');
			}
		})
	}
}

module.exports = mobileNavigation;
