var $ = require('jquery');
$.fn.scrollAnimation = function() {
	$(this).each(function() {
		new fadeItem(this);
	});
};

var fadeItem = function(_this) {
	this.$elem = $(_this);
	this.init();
};

fadeItem.prototype = {
	init: function() {
		var _self = this;
    var $window = $(window);
		var _targetPosY = this.$elem.offset().top;
		var _isStart = false;

		$window.on('scroll DOMContentLoaded load', function() {
			if( _isStart ) return;
			_targetPosY = _self.$elem.offset().top;
			var _posY = $(this).scrollTop() + $(this).height() * 0.7;
			if( _posY > _targetPosY ){
				_isStart = true;
				_self.$elem.addClass('sc--init');
			};
		});
	}
};
