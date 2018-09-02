const $ = require('jquery');
let origin = require('./utility');

var setHeight = {
	init: function() {
    var self = this;
    if (origin.VPisMobile) {
      this.setValue();
      $(window).on('resize.mobileEvent', this.setValue)
    }
    $(window).on('changeMobile', function() {
      $(window).on('resize.mobileEvent', self.setValue)
    });
    $(window).on('changePC', function() {
      $(window).off('resize.mobileEvent');

      $('.profile__item').css('paddingBottom', 0);
    })

  },
  setValue: function() {
    var _target = $('.profile__desc');
    _target.each(function() {
      var _targetHeight = $(this).height();
      var _parent = $(this).parent().parent();
      _parent.css({
        'paddingBottom': _targetHeight + 20
      });
      if (!origin.VPisMobile) {
        _parent.css({
          'paddingBottom': 0
        });
      }
    });
  }

}

module.exports = setHeight;
