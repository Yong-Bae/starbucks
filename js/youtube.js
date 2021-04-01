// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

//onYouTubeIframeAPIReady 함수명은 바꾸면 안된다.
function onYouTubeIframeAPIReady() {

  //<div id="player"></div> 참조함....
  new YT.Player('player', {
    // videoId: 'qqAgsgG_ZMM', // 최초 재생할 유튜브 영상ID
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상ID
    playerVars: {
      autoplay: true, //자동 재생 유무
      loop: true,     //반복 재생 유무
      // playlist: 'qqAgsgG_ZMM' //반복 재생할 유튜브 영상 ID 목록
      playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 ID 목록
    },
    event: {
      //플레이가 준비되면 onRead 됨
      onRead: function (event) {
        event.target.mute() //mute() 음소거
      }
    }
    
  });
}


