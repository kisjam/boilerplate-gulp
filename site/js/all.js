(function($) {

	$.fn.rollOver = function(_o) {
		var _c = $.fn.extend({
			selector: '.ro',
			fadeSelector: 'fade',
			suffix: '_on',
			duration: 100
		}, _o);
		
		var _selector = _c.selector;
		var _fade = _c.fadeSelector;
		var _suffix = _c.suffix;
		var _duration = _c.duration;
				
		$(_selector).each(function() {
			var _src = $(this).attr('src');
			var _srcOn = _src.replace(/([\w\-]+)(\.\w+)$/, '$1' + _suffix + '$2');

			if (!$(this).hasClass(_fade)) {
				$('<img>').attr('src', _srcOn);
				
				$(this).hover(
					function() {
						$(this).attr('src', _srcOn);
					},
					function() {
						$(this).attr('src', _src);
					}
				);
			} else {
				$(this).wrap('<div />').parent().css({
					'backgroundImage': 'url('+_srcOn+')',
					'backgroundRepeat': 'no-repeat'
				}).find('img').hover(
					function() {
						$(this).stop().animate({
							'opacity': 0
						}, _duration);
					},
					function() {
						$(this).stop().animate({
							'opacity': 1
						}, _duration);
					}
				);
			}
		});
	},
	
	$.fn.smoothScroll = function(_o) {
		var _c = $.fn.extend({
			selector: 'a[href^=#]',
			time: 500
		}, _o);
		
		var _selector = _c.selector;
		var _time = _c.time;
		$.extend($.easing, { easeOutExpo: function (x, t, b, c, d) { return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b; }});
		
		$(_selector).click(function() {
			var _href = $(this).attr('href');
			if (_href != "#") {
				var _posY = $(_href).offset().top;
				$('html, body').animate({
					scrollTop: _posY
				}, _time, 'easeOutExpo');
			}
			
			return false;
		});
	},
	
	$.fn.checkViewmode = function() {
		if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
			var _btnHtml = '<p class="btn btnSpmode"><a href="/recruit/sp/">スマートフォンサイトはこちら</a></p>';
			$('body').prepend(_btnHtml);
			$('.btnSpmode').on('click', function() {
				$.cookie('viewmode', '', {path: '/'});
			});
			
		}
		
	}
	
	// Initialize
	$.fn.checkViewmode();
	$.fn.smoothScroll();
	$.fn.rollOver();
	$.fn.staffContents();
	
})(jQuery);

