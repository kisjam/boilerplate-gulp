//
// const $ = require('jquery');
// let origin = require('./utility');
//
// $(function() {
//   $('.movie__item').on('click', function(ev) {
//     $(this).addClass('movie__item--init');
//     $(this).find('iframe')[0].src += "&autoplay=1";
//     ev.preventDefault();
//
//   });
// });
//
// var yt = function() {
//   console.log('jpge')
// var tag = document.createElement('script');
//
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
// var player_short;
// var player_long;
// function onYouTubeIframeAPIReady() {
//   player_long = new YT.Player('js__yt__01', {
//     height: '330',
//     width: '600',
//     videoId: '4G8IjoVU-1I',
//     playerVars: { 'controls': 0 , 'showinfo': 0},
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
//   player_short = new YT.Player('js__yt__02', {
//     height: '330',
//     width: '600',
//     playerVars: { 'controls': 0 , 'showinfo': 0},
//     videoId: 'Ka4rWFbFQ-0',
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }
//
// function onPlayerReady(event) {
// }
//
// var done = false;
// function onPlayerStateChange(event) {
// }
// function stopVideo() {
//   player.stopVideo();
// }
// }
// module.exports = yt;
