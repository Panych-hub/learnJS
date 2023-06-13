"use strict";

// This
console.log(this); // {}

func();
// func2(); // ReferenceError - функции нет в scope
function func(){
    console.log(this); //undefined
    func2()
    console.log(a); //undefined
    var a = 3;
    function func2() {
        console.log("func2", this); //undefined
    }
    console.log(1);
}

let obj = {
    name: "qwer",
    met() {
        console.log(this);
    }
}
obj.met(); //obj
let met1 = obj.met;
met1(); //undefined

let obj1 = {
    obj2: {
        h: this,
        bar() {
            return this
        }
    }
}
console.log(obj1.obj2.h) // global = {}
console.log(obj1.obj2.bar()) // obj2




function makeUser(){
    function test(){
        return this;
    }
    console.log(test());
    return {
        name: "john",
        caller: test
    }
}
makeUser.test = "123123";
// makeUser().caller();
console.log(makeUser().caller());

function test(){
    this.a = 1;
    this.met = () => console.log(this);
}
let aa = new test;

aa.met();


// Closure
console.log()
function mult(b){
    return function(a){
        return a * b;
    }
}

let mult10 = mult(10);
console.log(mult10(2));

// proto
let a = {a: 1};
let b = {
    _proto_: a
}
console.log(b._proto_);
console.log(Object.getPrototypeOf(a));
console.log(Object.getPrototypeOf(b));
let c = Object.create(a);
console.log(Object.getPrototypeOf(c));