export function initText() {
    const textInput = document.querySelector("input#text");

    textInput.addEventListener("input", e => {
        sessionStorage.setItem("text", e.targe.value);
    });
};