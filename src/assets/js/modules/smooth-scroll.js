const $ = require('jquery');

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
      if (_href == "#") return;

			_posY = $(_href).offset().top - 100;

			$('html, body').animate({
				scrollTop: _posY
			}, 1000, 'swing');

      return false;
    });
  },

}
