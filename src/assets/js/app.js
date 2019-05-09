
import $ from 'jquery';
import ResponsiveImage from './modules/responsive-image';
import ScrollAnimation from './modules/scroll-animation';
import mobileNavigation from './modules/mobile-menu';
import navStatus from './modules/nav-status';
import './modules/smooth-scroll';
import throttle from 'lodash.throttle';
import Vivus from 'vivus';
import Wave from './modules/wave';

window.addEventListener('DOMContentLoaded', () => {
	new ResponsiveImage();

	navStatus.init();

	if ($('body.index').length || $('body.video').length) {

		$('.visual').addClass('-visible');

		var visual = new Vivus('visual__svg', {
			type: 'scenario',
			forceRender: false
		});

		setTimeout(function () {
			$('.visual__copy').addClass('-visible');
		}, 2600);

		new Wave('#waveStory');
		new Wave('#waveInterview');
		new Wave('#waveMessage');
		new Wave('#waveSpecial');
		// new Wave('#waveSystem');

		var interview = $('.interview__item a');

		interview.hover(function () {

			var video = $(this).find('video').get(0);

			video.currentTime = 0;
			video.play();

		}, function () { });
	}

	mobileNavigation.init();
	$.smoothScroll();

	const sa = document.querySelectorAll('.st');
	new ScrollAnimation(sa);

});
