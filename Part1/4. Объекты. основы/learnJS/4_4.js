"use strict";
function task1(){
    function makeUser(){
        return {
            name: "John",
            ref: this
        };
    }

    let user = makeUser();

    // console.log( user.ref.name );
}
function task2(){
    // let calculator = {
    //     read() {
    //         this.a = +prompt("a=", 0);
    //         this.b = +prompt("b=", 0);
    //     },
    //     sum(){
    //         return this.a + this.b;
    //     },
    //     mul(){
    //         return this.a * this.b;
    //     }
    // }
    //
    // calculator.read();
    // alert( calculator.sum() );
    // alert( calculator.mul() );
}
function task3(){
    let ladder = {
        step: 0,
        up() {
            this.step++;
            return  this
        },
        down() {
            this.step--;
            return  this
        },
        showStep: function() { // показывает текущую ступеньку
            console.log( this.step );
            return  this
        }
    };
    ladder.up();
    ladder.up();
    ladder.down();
    ladder.showStep(); // 1
    ladder.down();
    ladder.showStep(); // 0
    ladder.up().up().down().showStep().down().showStep();
}
function task4(){

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
