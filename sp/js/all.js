(function($){
	$.accordionMenu = function() {		
		var _this = $('.accordion');
		if (!_this) return false;
		var clickHandler = function() {
			_this.find('span').on('click', function(e) {
				$(this).parent().find('p').toggle();
			}).toggle(function() {
					$(this).find('i').attr('class', 'pictClose');
				}, function() {
					$(this).find('i').attr('class', 'pictOpen');
				})
		}
		var init = function() {
			clickHandler();
		}
		init();
	}
	
	$.globalMenu = function() {
		var _menu = $('#menu');
		var _btnMenu = $('.ngMenu');
		var _activeFlg = false;
		var _duration = 350;
		var _easing = 'swing';
		var _html = $('#mainContents, #footerGlobal, .btnArea');
		var _menuHeight = $('#menu').height() + 78;
		var support = {
			transform3d: ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix()),
			touch: ('ontouchstart' in window)
		}
		transform3dEvent = support.transform3d ? true : false;
		console.log(transform3dEvent)
		var clickHandler = function() {
			$('.ngMenu a, .close a').on('click', function() {
				if ($(window).scrollTop() <= 0) {
					toggleMenu();
				} else {
					$('body').animate({
						scrollTop: 0
					}, 300, 'swing', function() {
						setTimeout(toggleMenu, 250);
					});
				}
			})
		}
		var toggleMenu = function() {
			_activeFlg = !_activeFlg;
			if (_activeFlg) {
				_btnMenu.addClass('active');
				setHeight();
				console.log(transform3dEvent)
				if (transform3dEvent) {
					console.log('kiteru')
					_menu.addClass('activeMenu3d');
				} else {
					console.log('treureureu')
					_menu.addClass('activeMenuPos');
				}
				setTimeout(function() {
					_html.toggle();
				}, 1000)
			} else {
				_btnMenu.removeClass('active');
				setHeight();
				if (transform3dEvent) {
					_menu.removeClass('activeMenu3d');
				} else {
					_menu.removeClass('activeMenuPos');
				}
				_html.toggle();
			}
			function setHeight() {
				if (_activeFlg) {
					$('body').css('height', _menuHeight);
				} else {
					$('body').css('height', 'auto');
				}
				
			}
		}
		var init = function() {
			clickHandler();
		}
		init();
	}
	
	$.smoothScroll = function(_o) {
		var _c = $.fn.extend({
			selector: 'a[href^=#]',
			time: 500
		}, _o);
		
		var _selector = _c.selector;
		var _time = _c.time;
		
		$(_selector).click(function() {
			var _href = $(this).attr('href');
			if (_href != "#") {
				var _posY = $(_href).offset().top;
				$('html, body').animate({
					scrollTop: _posY
				}, _time);
			}
			return false;
		});
	}
	$(function() {
		
	})
	$.smoothScroll();
	$.accordionMenu();
	$.globalMenu();
})(jQuery);