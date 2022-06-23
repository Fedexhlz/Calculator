const displayPreviousValue = document.getElementById('previous-value');
const displayCurrentValue = document.getElementById('current-value');
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('operator');

const display = new Display(displayPreviousValue, displayCurrentValue);

numberButton.forEach((button) => {
  button.addEventListener('click', () => display.addNumber(button.innerHTML));
});
