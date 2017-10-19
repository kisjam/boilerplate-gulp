const $ = require('jquery');
let origin = require('./utility');

$.smoothScroll = function() {
	$('a[href^="#"]').each(function() {
		new anchor(this);
	});
};

var anchor = function(_this) {
	this.$elem = $(_this);
	this.init();
};
anchor.prototype = {
  init: function() {
    this.$elem.on('click', function() {
      var _href = $(this).attr('href');
      var _posY = 0;
      var _headerHeight = $('.header').height();
      if (_href == "#") return;

			_posY = $(_href).offset().top - _headerHeight;

			$('html, body').animate({
				scrollTop: _posY
			}, 1000, 'swing');

      return false;
    });
  },

}
// var _c = $.fn.extend({
// 			selector: 'a[href^="#"]',
// 			time: 1000
// 		}, _o);
//
// 		var _selector = _c.selector,
// 			_time = _c.time,
// 			_headerHeight;
//
// 		$(_selector).on('click',function() {
//
// 			if (_href != "#") {
// 				var _posY = 0;
// 				if (_href != "#js-pagetop") _posY = $(_href).offset().top;
// 				$('html, body').animate({
// 					scrollTop: _posY
// 				}, _time, 'easeOutExpo');
// 			}
//
// 			return false;
// 		});
