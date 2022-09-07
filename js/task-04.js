let counterValue = 0;
console.log(counterValue);

const buttonMinus = document.querySelector(`[data-action="decrement"]`);
const buttonPlus = document.querySelector(`[data-action="increment"]`);
const countDisplay = document.querySelector("#value");

buttonMinus.addEventListener("click", () => {
    counterValue -= 1;
    countDisplay.textContent = counterValue;
});

buttonPlus.addEventListener("click", () => {
    counterValue += 1;
    countDisplay.textContent = counterValue;
    
});
