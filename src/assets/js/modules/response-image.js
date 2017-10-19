const $ = require('jquery');
let origin = require('./utility');

$.fn.responseImage = function() {
	$(this).each(function() {
		new imageItem(this);
	});
};

const imageItem = function(_this) {
	this.$elem = $(_this);
	this.init();
};

imageItem.prototype = {
	init: function() {
		let _self = this.$elem;

		origin.$window.on('DOMContentLoaded load', function() {
			//const $elem = $('[data-sp]');
			const _srcSp = _self.data('sp');
			const _srcOrigin = _self.attr('src');

			//console.log(_srcSp)

			if (origin.VPisMobile) {
				_self.attr('src', _srcSp);
			}
			$(this).on('changeMobile', function() {
				_self.attr('src', _srcSp);
			})
			$(this).on('changePC', function() {
				_self.attr('src', _srcOrigin);
			})


		});
	}
};
