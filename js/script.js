window.addEventListener('DOMContentLoaded', function(){
    let template_nav_content = document.getElementsByClassName('template-nav-content')[0];
    let template_nav_list = document.getElementsByClassName('template-nav');

    for(let count = 0; count < template_nav_list.length; count++) {
        let template_nav_content_cpy = template_nav_content.content.cloneNode(true);
        template_nav_list[count].appendChild(template_nav_content_cpy);
    }

    let background_video_element = document.getElementsByClassName('layout-bg-video')[0];
    background_video_element.playbackRate = 0.9;
});