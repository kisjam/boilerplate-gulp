<<<<<<< HEAD
'use strict';

const $ = require('jquery');
<<<<<<< HEAD
const Utility = require('./modules/utility');
const u = new Utility();
const ResponsiveImage = require('./modules/responsive-image');
const responsiveImage = new ResponsiveImage();
// require('./modules/scroll-animation');
// require('./modules/smooth-scroll');
=======
>>>>>>> release/3.0.1

import $ from 'jquery';
import ResponsiveImage from './modules/responsive-image';
import ScrollAnimation from './modules/scroll-animation';
import mobileNavigation from './modules/mobile-menu';
import './modules/smooth-scroll';
import throttle from 'lodash.throttle';
import Tweenmax from 'gsap';

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
const navStatus = require('./modules/nav-status');
const mobileNavigation = require('./modules/mobile-menu');
require('./modules/utility');
require('./modules/scroll-animation');
require('./modules/response-image');
require('./modules/smooth-scroll');

>>>>>>> e065d377fef07f9e03caf751988aa3d5ab0b2ecb
=======
>>>>>>> release/2.3
>>>>>>> release/2.3
=======
>>>>>>> release/2.4
$(function() {
  // console.log(u.ww())
  // console.log(u.isMobileVp);
  // u.mq.addListener(hoge);
  // function hoge() {console.log('hoge')}
  // mq.addListener(() => {console.log('change!')})
  // $.smoothScroll();
  // $('.sc').scrollAnimation();
  // $('[data-sp]').responseImage();
  // mobileNavigation.init();
  // navStatus.init();
})
=======
>>>>>>> release/3.0.1
window.addEventListener('DOMContentLoaded', () => {

	new ResponsiveImage();

	mobileNavigation.init();
	$.smoothScroll();

	const sa = document.querySelectorAll('.sa');
	new ScrollAnimation(sa);

	// window.addEventListener('scroll', throttle(function() {
	// 	console.log('throttle');
	// }, 1000));

});
