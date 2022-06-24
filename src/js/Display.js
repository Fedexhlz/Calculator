class Display {
  constructor(displayPreviousValue, displayCurrentValue) {
    this.displayCurrentValue = displayCurrentValue;
    this.displayPreviousValue = displayPreviousValue;
    this.calculator = new Calculator();
    this.operationType = undefined;
    this.currentValue = '';
    this.previousValue = '';
  }

  delete() {
    this.currentValue = this.currentValue.toString().slice(0, -1);
    this.printValue();
  }

  deleteAll() {
    this.currentValue = '';
    this.previousValue = '';
    this.operationType = undefined;
    this.printValue();
  }

  addNumber(number) {
    if (number === '.' && this.currentValue.includes('.')) return;
    this.currentValue = this.currentValue + number;
    this.printValue();
  }

  printValue() {
    this.displayCurrentValue.textContent = this.currentValue;
    this.displayPreviousValue.textContent = this.previousValue;
  }
}
