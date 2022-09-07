const inputSize = document.querySelector("#font-size-control");
const headName = document.querySelector("#text");

headName.style.fontsize = inputSize.value + "px";

inputSize.addEventListener("input", onInputChange);

function onInputChange(event) {
    headName.style.fontSize = `${event.currentTarget.value}px`;
};