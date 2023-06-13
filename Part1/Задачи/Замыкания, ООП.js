//Task1
function Counter(){
    this.value = 0;
    this.increment = function () {
        this.value = this.value + 1;
    }
    this.decrement = function () {
        this.value = this.value - 1;
    }
   this.getValue = function () {
        return this.value;
    }
}
let counter1 = new Counter;
counter1.increment(); // 1
counter1.increment(); // 2
counter1.increment(); // 3
counter1.decrement(); // 2
console.log(counter1.getValue()); // 2

function Counter2(){
    this.value = 0;
    this.counterBaseValue = 0;
    this.setBaseValue = function (baseValue) {
        this.counterBaseValue = baseValue;
    }
    this.getBaseValue = function (baseValue) {
        return this.counterBaseValue;
    }
    this.increment = function () {
        this.value = this.value + 1;
        this.counterBaseValue++;
    }
    this.decrement = function () {
        this.value = this.value - 1;
        this.counterBaseValue++;
    }
    this.getValue = function () {
        return this.value;
    }
}

let counter2 = new Counter2;
counter2.increment(); // 1 1
counter2.increment(); // 2 2
console.log(counter2.getBaseValue()); //2
counter2.setBaseValue(0); // 2 0
counter2.increment(); // 3 1
console.log(counter2.getBaseValue());// 1
counter2.increment();  // 4 2
console.log(counter2.getValue()); // 4