"use strict";
function task1(){
    let obj = {};
    function A() { return obj; }
    function B() { return obj; }

    let a = new A();
    let b = new B();
    // console.log(a);
    console.log( a == b );
}
function task2(){
    // function Calculator(){
    //     this.read = function(){
    //         this.a = +prompt("a?", 0);
    //         this.b = +prompt("b?", 0);
    //     }
    //     this.mul = function(){
    //         return this.a * this.b;
    //     }
    //     this.sum = function(){
    //         return this.a + this.b;
    //     }
    // }
    //
    // let calculator = new Calculator();
    // calculator.read();
    //
    // alert( "Sum=" + calculator.sum() );
    // alert( "Mul=" + calculator.mul() );
    
}
function task3(){
    // function Accumulator(startingValue){
    //     this.value = startingValue;
    //     this.read = function () {
    //         this.value += +prompt("?", 0);
    //     }
    // }
    //
    // let accumulator = new Accumulator(1); // начальное значение 1
    //
    // accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
    // accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
    //
    // alert(accumulator.value);
}
function task4(){
    function Calculator(){
        this.read = function(){
            this.a = +2;
            this.b = +3;
        }
        this.mul = function(){
            return this.a * this.b;
        }
        this.sum = function(){
            return this.a + this.b;
        }
    }

    let calculator = new Calculator();
    calculator.read();

    // console.log( "Sum=" + calculator.sum() );
    // console.log( "Mul=" + calculator.mul() );
    // console.log(calculator.sum?.());
    let aa = {
        a: 1,
        b: 2,
    }
    console.log(aa?.a);
}
function task5(){

}

console.log('task1');
task1();
console.log('\ntask2');
task2();
console.log('\ntask3');
task3();
console.log('\ntask3');
task4();
console.log('\ntask3');
task5();
