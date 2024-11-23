const marquee = document.getElementById("marquee");
const pauseButton = document.getElementById("pause-btn");

let isPaused = false;

pauseButton.addEventListener("click", () => {
    if (isPaused) {
        marquee.style.animationPlayState = "running";
        pauseButton.textContent = "⏸️";
    } else {
        marquee.style.animationPlayState = "paused";
        pauseButton.textContent = "▶️";
    }
    isPaused = !isPaused;
});