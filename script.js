let max = 0.0;

window.addEventListener('DOMContentLoaded', function(){
    let background_video_element = document.getElementsByClassName('layout-bg-video')[0];
    background_video_element.playbackRate = 1;
});

f = function() {
    let background_video_element = document.getElementsByClassName('layout-bg-video')[0];
    if(background_video_element.currentTime > max) {
        max = background_video_element.currentTime;
    }
    console.log(max);
};