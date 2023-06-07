var video = document.getElementById('intro-video');
var playButton = document.getElementById('play-button');
var intro = document.getElementById('intro');
var introChildren = intro.children;

for (var i = 0; i < introChildren.length; i++) {
    intro.style.display = 'none';
    introChildren[i].style.display = 'none'; 
}

playButton.addEventListener('click', function() {
    video.play();
    this.style.display = 'none';
});

video.addEventListener('ended', function() {
    this.style.display = 'none';
    intro.style.display = 'block';

    for (var i = 0; i < introChildren.length; i++) {
        introChildren[i].style.display = 'block'; 
    }
});
