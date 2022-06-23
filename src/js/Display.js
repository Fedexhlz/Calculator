class Display {
  constructor(displayPreviousValue, displayCurrentValue) {
    this.displayCurrentValue = displayCurrentValue;
    this.displayPreviousValue = displayPreviousValue;
    this.calculator = new Calculator();
    this.currentValue = '';
    this.previousValue = '';
  }

  addNumber(number) {
    this.currentValue = number;
  }
}
