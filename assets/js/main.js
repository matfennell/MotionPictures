    // Loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replaces the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

var videosArray = ['bT_UmBHMYzg'];
var randomVideo = videosArray[Math.floor(Math.random() * videosArray.length)];


function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        videoId: randomVideo,
        playerVars: {
          autoplay: 1,
          start: 7,
          controls: 0,
          loop: 1,
          modestbranding: 1,
          showinfo: 0,
          autohide: 1
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event){
    player.mute();
}

$(document).ready(function() {
    spectrum();

    function spectrum(){
        var RandColour = '#'+Math.floor(Math.random()*16777215).toString(16);

        console.log(RandColour);

        $('.main-content__title h1').css('color', RandColour);

        setTimeout(function(){ spectrum(); }, 3000);
    }

    $('.js-popup').magnificPopup({
        type:'inline',
        midClick: true
    });

    $('.js-popup').on('click', function(){
        $('.main-content__popup').fadeIn();
    });
});
