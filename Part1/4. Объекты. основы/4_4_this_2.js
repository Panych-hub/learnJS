"use strict";
console.log(this);
let a = 0;

function sayHi() {
    console.log(this);
}
sayHi();

console.log(this.a);
function sayHi1() {
    console.log(this.a);
}
sayHi1();

// function sayHi() {
//     console.log(this.a);
// }
// const user = {
//     name: 'Alex',
//     greet() {
//         console.log(`Hello, my name is ${this.name}`)
//     },
// }

// const greet = user.greet
// greet()