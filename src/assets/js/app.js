const $ = require('jquery');
require('./modules/utility');
require('./modules/scroll-animation');
require('./modules/response-image');
require('./modules/smooth-scroll');

var navStatus = require('./modules/nav-status');
var mobileNavigation = require('./modules/mobile-menu');

$(function() {
  $.smoothScroll();
  $('.sc').scrollAnimation();
  $('[data-sp]').responseImage();
  mobileNavigation.init();
  navStatus.init();
})
