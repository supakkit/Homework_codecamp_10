function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt(`Input Number to add ${this.value} :`);
    }
}

let accumulator = new Accumulator(10);
accumulator.read();
alert(`Result : ${accumulator.value}`);