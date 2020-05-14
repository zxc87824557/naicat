var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'j9uKM8QltCo',
    events: {
      onReady: onPlayerReady
    }
  });
}
function onPlayerReady(e) {
  e.target.mute().playVideo();
}
