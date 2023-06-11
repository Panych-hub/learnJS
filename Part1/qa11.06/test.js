// "use strict";
// func();
// func2();
// console.log(this);
/*
function func(){
    console.log(this);
    func2()
    console.log(a);
    var a = 3;
    function func2() {
        console.log(this);
        console.log(2);
    }
    console.log(1);
}

let obj = {
    name: "qwer",
    met() {
        console.log(this);
    }
}

obj.met();
let met1 = obj.met;
met1();*/

/*function mult(b){
    return function(a){
        return a * b;
    }
}

let mult10 = mult(10);
console.log(mult10(2));*/

// let obj = {
//     a: 1,
//     func(){
//         console.log(2);
//     },
// }
// "use strict";
// let a = 1;
//
//
// function func() {
//     console.log(this);
// }
// func()
//
// let obj1 = {
//     obj2: {
//         h: this,
//     }
// }
// console.log(obj1.obj2.h)


/*var b = "1";
function test(a) {
    return function test2(){
        console.log(b + "123");
    }

    const b = "123";
    console.log(b);
    test2();
}
test("2");*/



/*function makeUser(){
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
console.log(makeUser().caller());*/

/*
function test(){
    this.a = 1;
    this.met = () => console.log(this);
}
let a = new test;

a.met();*/

let a = {a: 1};
let b = {
    _proto_: a
}
console.log(b._proto_);
console.log(Object.getPrototypeOf(a));
console.log(Object.getPrototypeOf(b));
let c = Object.create(a);
console.log(Object.getPrototypeOf(c));