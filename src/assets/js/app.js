
'use strict';

import $ from 'jquery';
import ResponsiveImage from './modules/responsive-image';
import ScrollAnimation from './modules/scroll-animation';
import mobileNavigation from './modules/mobile-menu';
import './modules/smooth-scroll';
import throttle from 'lodash.throttle';
import Tweenmax from 'gsap';

const navStatus = require('./modules/nav-status');
const mobileNavigation = require('./modules/mobile-menu');
require('./modules/utility');
require('./modules/scroll-animation');
require('./modules/response-image');
require('./modules/smooth-scroll');

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
