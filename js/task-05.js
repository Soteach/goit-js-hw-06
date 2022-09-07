const inputName = document.querySelector("#name-input");
const headName = document.querySelector("#name-output");

inputName.addEventListener("input", onInputChange); 

function onInputChange(event) {
     headName.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        headName.textContent = "Anonymous"
    } else {
        headName.textContent = event.currentTarget.value;
    }
};