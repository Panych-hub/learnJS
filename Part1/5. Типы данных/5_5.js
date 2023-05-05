"use strict";
let mainArr = [function task1(){
    function camelize(str) {
        let strArray = str.split('-');
        for (let i=1; i<strArray.length; i++){
            strArray[i] = strArray[i][0].toUpperCase()+strArray[i].slice(1,);
        }
        // console.log();
        return strArray.join('');
    }
    console.log(camelize("background-color") === 'backgroundColor');
    console.log(camelize("list-style-image") === 'listStyleImage');
    console.log(camelize("-webkit-transition") === 'WebkitTransition');
},
function task2(){
    function filterRange(arr, a, b) {
        return arr.filter((item) => item >= a && item <= b);
    }

    let arr = [5, 3, 8, 1];

    let filtered = filterRange(arr, 1, 4);

    console.log( filtered ); // 3,1 (совпадающие значения)

    console.log( arr ); // 5,3,8,1 (без изменений)
},
function task3(){
    function filterRangeInPlace(arr, a, b) {
        for (let i=0; i<arr.length; i++){
            if (arr[i] < a || arr[i] > b) arr.splice(i, 1);
        }
    }
    let arr = [5, 3, 8, 1];
    filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

    console.log( arr ); // [3, 1]
},
function task4(){
    let arr = [5, 2, 1, -10, 8];
    arr.sort((a,b) => b - a);

    console.log( arr ); // 8, 5, 2, 1, -10
},
function task5(){
    function copySorted(arr) {
        return arr.slice().sort();
    }
    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    console.log( sorted ); // CSS, HTML, JavaScript
    console.log( arr ); // HTML, JavaScript, CSS (без изменений)
},
function task6(){
    function Calculator() {
        this.methods = {
            '+': (a, b) => +a + +b,
            '-': (a, b) => a - b
        }
        this.calculate = function (str){
            let [a, oper, b] = str.split(' ');
            if (isNaN(a) || !this.methods[oper] || isNaN(b)) return NaN;
            return this.methods[oper](a, b);
        }
        this.addMethod = function (name, func){
            this.methods[name] = func;
        }
    }
    let calc = new Calculator;

    console.log( calc.calculate("3 + 7") ); // 10
    let powerCalc = new Calculator;
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    let result = powerCalc.calculate("2 ** 3");
    console.log( result ); // 8
},
function task7(){
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [ vasya, petya, masha ];

    let names = users.map(item => item.name);
    console.log( names ); // Вася, Петя, Маша
},
function task8(){
    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [ vasya, petya, masha ];

    let usersMapped = users.map(item => ({
        fullName: item.name + ' ' + item.surname,
            id: item.id}));

    console.log( usersMapped[0].id ) // 1
    console.log( usersMapped[0].fullName ) // Вася Пупкин
},
function task9(){
    function sortByAge(arr) {
        arr.sort((a, b) => (a.age - b.age));
    }
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let arr = [ vasya, petya, masha ];
    console.log(arr);
    sortByAge(arr);

    console.log(arr);
},
function task10(){
    function shuffle(arr) {
        arr.sort(() => Math.random() - 0.5);

    }
    let arr = [1, 2, 3];

    shuffle(arr);
    console.log(arr);

    shuffle(arr);
    console.log(arr);

    shuffle(arr);
    console.log(arr);
},
function task11(){
    function getAverageAge(arr) {

        return arr.reduce((prev, curr) => prev + curr.age, 0)/arr.length;
    }
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 29 };

    let arr = [ vasya, petya, masha ];

    console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
},
function task12(){
    function unique(arr) {
        return arr.filter((item, index ) =>
            !arr.slice(0, index).includes(item));
    }

    let strings = ["кришна", "кришна", "харе", "харе", "2",
        "харе", "харе", "кришна", "кришна", ":-O"
    ];

    console.log( unique(strings) ); // кришна, харе, :-O
},
function task13(){

}]

for (let i=0; i<mainArr.length; i++){
    console.log('task' + i);
    mainArr[i]();
}


