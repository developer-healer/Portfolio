window.addEventListener('DOMContentLoaded', function() {
    // template-nav-content と template-nav の DOM 要素を取得
    let templateNavContent = document.querySelector('.template-nav-content');
    let templateNavList = document.querySelectorAll('.template-nav');

    // .template-nav-content の内容を各 .template-nav に追加
    templateNavList.forEach(nav => {
        let clonedContent = templateNavContent.content.cloneNode(true);
        nav.appendChild(clonedContent);
    });

    // 現在のページが "index.html" である場合、背景動画の再生速度を調整
    if (location.pathname.endsWith('index.html')) {
        let backgroundVideoElement = document.querySelector('.bg-video');
        if (backgroundVideoElement) {
            backgroundVideoElement.playbackRate = 0.9;
        }
    }
});

// スクロール無効化（Ctrl + スクロール）
document.addEventListener('wheel', function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });
