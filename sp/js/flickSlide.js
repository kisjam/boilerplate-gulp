(function($) {
	$.fn.flickSlider = function() {
		var _slider = $(this),
			_sliderElm = _slider.find('.elm'),
			_sliderElmImg = _slider.find('.elm li'),
			_arrElmPos = new Array;
			if (_timerID) _timerID++;
			var _timerID = 1;
			for (var i = 0, len = _sliderElmImg.length;i < len;i++) {
				_arrElmPos.push(_sliderElmImg.eq(i).width() * i);
			}
		
		var _current = 0,
			_pageX = 0,
			_pageY = 0,
			_moveX = 0,
			_endX = 0,
			_startPageX = 0,
			_startTime = 0,
			_time = 0,
			_sliderActive = '',
			_sliderActiveElm = '',
			_autoFlg = true;
		
		function addController() {
			var _htmlController = $('<ul class="controller" />');
			var _htmlCtrlChild = '';
			$('.inner', _slider).append(_htmlController);
			_sliderActive = _slider.find('.controller');
			
			for (var i = 0, len = _sliderElmImg.length; i < len; i++) {
				_htmlCtrlChild += '<li></li>';
			}
			_sliderActive.append(_htmlCtrlChild);
			_sliderActiveElm = _slider.find('.controller li');
			moveActive();
		}
		function moveElm() {
			_sliderElm.each(function() {
				$(this).animate({
					'left':-_arrElmPos[_current]
				}, _time, 'swing', function() {
					if (!_autoFlg) {
						autoMove();
						_autoFlg = true;
					}
				})
			});
		}
		function moveActive() {
			_sliderActiveElm.removeClass('active').eq(_current).addClass('active');
		}
		function autoMove() {
			_time = 500;
			_timerID = setInterval(function() {
				_current++;
				if (_current == _sliderActiveElm.length) {
					_current = 0;
				}
				moveElm();
				moveActive();
			}, 5000)
		}
		_sliderElm.on('touchstart', function(e) {
			e.preventDefault();
			_pageX = event.changedTouches[0].pageX;
			_pageY = event.changedTouches[0].pageY;
			_startPageX = _pageX;
			_startTime = +new Date();
			clearInterval(_timerID);
			_autoFlg = false;
		})
		_sliderElm.on('touchmove', function(e) {
			e.preventDefault();
			_moveX = _pageX - event.changedTouches[0].pageX;
			$(this).css({'left':-_arrElmPos[_current] + -_moveX})			
		})
		_slider.on('touchend', function() {
			var _now = new Date();
			var _diffTime = _now - _startTime;
			
			_time = 300;
			if (_diffTime < 400 && _current != _sliderElmImg.length - 1) {
				if (_moveX > 0) {
					_current++;
				}
				if (_moveX < 0 && _current != 0) {
					_current--;
				}
			} else {
				if (_moveX > 50 && _current != _sliderElmImg.length - 1) {
					_current++;
				}
				if (_moveX < -50 && _current != 0) {
					_current--;
				}
			}
			moveElm();
			moveActive();
		})
		addController();
		autoMove();
	}
	$(function() {
		window.onload = function() {
			$('#photoSlider01').flickSlider();
			$('#photoSlider02').flickSlider();
		}
	})
})(jQuery)
