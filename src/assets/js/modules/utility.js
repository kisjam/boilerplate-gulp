/*!
 *
 * origin.js
 *
 */

const $ = require('jquery');
var origin = {};

origin.ua = (function(u){
	return {
		isTablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1)
			|| u.indexOf("ipad") != -1
			|| (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
			|| (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
			|| u.indexOf("kindle") != -1
			|| u.indexOf("silk") != -1
			|| u.indexOf("playbook") != -1,
		isMobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
			|| u.indexOf("iphone") != -1
			|| u.indexOf("ipod") != -1
			|| (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
			|| (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
			|| u.indexOf("blackberry") != -1
	}
})(window.navigator.userAgent.toLowerCase());

origin.$window = $(window);
origin.wh = window.innerHeight;
origin.ww = window.innerWidth;

origin.VPisMobile = false;
if( origin.ww < 768 ){
	origin.VPisMobile = true;
};

origin.VPisTablet = false;
if( origin.ww < 1024 ){
	origin.VPisTablet = true;
};

origin.st = (function(){
	var elem;
	if($.support.checkOn && $.support.noCloneChecked) {
		elem = 'html,body'; //FireFox
	}else {
		elem = 'html'; //Oprea IE9
	};
	if( origin.ua.isMobile || origin.ua.isTablet){
		elem = 'html,body';
	};
	return elem;
})();

$(function(){
	origin.$window.on('resize', function(){
		origin.wh = window.innerHeight;
		origin.ww = window.innerWidth;
		if( !origin.VPisMobile && origin.ww < 768 ){
			origin.VPisMobile = true;
			$(this).trigger('changeMobile');
		};
		if( origin.VPisMobile && origin.ww >= 768 ){
			origin.VPisMobile = false;
			$(this).trigger('changePC');
		};
		if( !origin.VPisTablet && origin.ww < 1024 ){
			origin.VPisTablet = true;
		};
		if( origin.VPisTablet && origin.ww >= 1024 ){
			origin.VPisTablet = false;
		};
	});

	if( !origin.ua.isMobile ){
		origin.$window.trigger('scroll');
	};
});

module.exports = origin;
