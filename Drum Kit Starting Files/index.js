
const buttonList = document.querySelectorAll("button");
const audioFiles = {
    w: "sounds/crash.mp3",
    a: "sounds/kick-bass.mp3",
    s: "sounds/snare.mp3",
    d: "sounds/tom-1.mp3",
    j: "sounds/tom-2.mp3",
    k: "sounds/tom-3.mp3",
    l: "sounds/tom-4.mp3"
};

buttonList.forEach(button => {
    button.addEventListener("click", () => {
        const key = button.innerHTML;
        playSound(key);
        animateButton(key);
    });
});

document.addEventListener("keydown", event => {
    const key = event.key.toLowerCase();
    if (audioFiles.hasOwnProperty(key)) {
        event.preventDefault();
        playSound(key);
        animateButton(key);
    }
});

function playSound(key) {
    const audio = new Audio(audioFiles[key]);
    audio.play();
}

function animateButton(key) {
    const button = document.querySelector("." + key);
    button.classList.add("pressed");
    button.style.color = "white";
    setTimeout(() => {
        button.classList.remove("pressed");
        button.style.color = "#DA0463";
    }, 200);
}