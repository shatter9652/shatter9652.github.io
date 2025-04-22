// SCRIPT SKIDDED FROM FROGGIE!!!

// errr
const textElement = document.getElementById("text");
const overlay = document.getElementById("overlay");
const audio = document.getElementById("audio-player");

// lyrics timing and stuff
const phrases = [
    "",
    "When",
    "When the",
    "When the light",
    "When the light is",
    "When the light is running",
    "When the light is running low",
    "And",
    "And the",
    "And the shadows",
    "And the shadows start",
    "And the shadows start to",
    "And the shadows start to grow",
    "And",
    "And the",
    "And the places",
    "And the places that",
    "And the places that you",
    "And the places that you know",
    "Seem",
    "Seem like",
    "Seem like fantasy"
];

// these are in seconds btw
const delays = [1.89, 0.65, 0.67, 0.50, 0.45, 0.65, 0.67, 0.55, 0.55, 0.55, 0.55, 0.56, 0.45, 0.45, 0.45, 0.45, 0.65, 0.65, 0.60, 0.65, 0.35, 1.65];

overlay.addEventListener("click", () => {
    textElement.textContent = "";
    audio.play();
});

// main animation fade in
audio.addEventListener("play", () => {
    let i = 0;
    overlay.style.opacity = "1";
    
    function updateText() {
        if (i < phrases.length) {
            textElement.textContent = phrases[i];
            setTimeout(updateText, delays[i] * 1000);
            i++;
        } else {
            setTimeout(() => {
                overlay.style.transition = "opacity 1s ease";
                overlay.style.opacity = "0";
                setTimeout(() => {
                    overlay.style.display = 'none';
                }, 1000);
            }, 300);
        }
    }
    updateText();
});
