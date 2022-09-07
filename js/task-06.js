const inputRef = document.querySelector("#validation-input");
const inputRefLength = inputRef.getAttribute("data-length")

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    
    if (event.currentTarget.value.length === Number(inputRefLength)){
        event.currentTarget.classList.add("valid");
        event.currentTarget.classList.remove("invalid");
    }
    else {
        event.currentTarget.classList.add("invalid");
        event.currentTarget.classList.remove("valid");
    }
}