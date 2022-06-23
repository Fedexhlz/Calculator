class Display {
  constructor(displayPreviousValue, displayCurrentValue) {
    this.displayCurrentValue = displayCurrentValue;
    this.displayPreviousValue = displayPreviousValue;
    this.calculator = new Calculator();
    this.currentValue = '';
    this.previousValue = '';
  }

  addNumber(number) {
    this.currentValue = this.currentValue + number;
    this.printValue();
  }

  printValue() {
    this.displayCurrentValue.textContent = this.currentValue;
    this.displayPreviousValue.textContent = this.previousValue;
  }
}
