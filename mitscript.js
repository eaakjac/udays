var audio = document.getElementById("audio1");
var btn = document.getElementById("btnPause");

function PausePlay() {
    if (audio.paused) {
        audio.play();
        btn.value = "Pause";
    } else if (audio.ended) {
        audio.currentTime = 0;
        audio.play();
        btn.value = "Pause";
    } else {
        audio.pause();
        btn.value = "Play";
    }
}
