var video = document.getElementById('intro-video');
var playButton = document.getElementById('play-button');
var intro = document.getElementById('intro');
var introChildren = intro.children;

intro.classList.add('hide');

for (var i = 0; i < introChildren.length; i++) {
    introChildren[i].classList.add('hide'); 
}

playButton.addEventListener('click', function() {
    video.play();
    this.style.display = 'none';
});

video.addEventListener('ended', function() {
    this.style.display = 'none';
    intro.classList.remove('hide');

    for (var i = 0; i < introChildren.length; i++) {
        introChildren[i].classList.remove('hide'); 
    }
});
