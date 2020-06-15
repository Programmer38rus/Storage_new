export function initAudio() {

    console.log("это функция в файле аудио")
    const audioInput = document.querySelector("input#file");
    const audio = document.querySelector("audio");

    audioInput.addEventListener("change", e => {
        audio.src = URL.createObjectURL(e.target.files[0]);
    });

    audio.addEventListener("play", e => {
        localStorage.setItem("play", e.target.src);
    });

    // audio.addEventListener("pause", e => {
    //     console.warn("pause handler");
    // });

    // audio.src = localStorage.getItem("play");

    window.addEventListener("storage", function (e) {
        audio.pause();
        console.log("Сработала функция!");
    });
}