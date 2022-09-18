const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const increaseBtn = document.querySelector("#increase");
const displayNumber = document.querySelector(".counter");
var num = 0;

decreaseBtn.addEventListener("click", () => {

    if (num > 0) {
        num -= 1;
        displayNumber.textContent = num;
    }
});

resetBtn.addEventListener("click", () => {
    num = null;
    displayNumber.textContent = 0;

});

increaseBtn.addEventListener("click", () => {

    num += 1;
    displayNumber.textContent = num;

});