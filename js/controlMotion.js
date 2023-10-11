var logInVideo = document.getElementById("logInVideo");
var pauseButton = document.getElementById("pauseButton");

function stopMotion() {
    if (logInVideo.paused) {
        logInVideo.play();
        pauseButton.textContent = "Stop Motion";
    } else {
        logInVideo.pause();
        pauseButton.textContent = "Continue Motion";
    }
}