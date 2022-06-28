const increaseButton = document.querySelector('.increase-button');
const decreaseButton = document.querySelector('.decrease-button');
const resetButton = document.querySelector('.reset-button');
const int = document.querySelector('#output');
let integer = 0;

increaseButton.addEventListener('click', function() {
    integer += 1;
    int.textContent = integer;
    if (integer > 0) {
        output.style.color = 'green';
    } else if (integer === 0) {
        output.style.color = 'black';
    }
})

decreaseButton.addEventListener('click', function() {
    integer -= 1;
    int.textContent = integer;
    if (integer < 0) {
        output.style.color = 'red';
    } else if (integer === 0) {
        output.style.color = 'black';
    }
})

resetButton.addEventListener('click', function() {
    integer = 0;
    int.textContent = integer;
    if (integer === 0) {
        output.style.color = 'black';
    }
})