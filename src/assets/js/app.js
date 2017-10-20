'use strict';

const $ = require('jquery');
const navStatus = require('./modules/nav-status');
const mobileNavigation = require('./modules/mobile-menu');
require('./modules/utility');
require('./modules/scroll-animation');
require('./modules/response-image');
require('./modules/smooth-scroll');

$(function() {
  $.smoothScroll();
  $('.sc').scrollAnimation();
  $('[data-sp]').responseImage();
  mobileNavigation.init();
  navStatus.init();
})
