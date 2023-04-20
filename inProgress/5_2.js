"use strict";
function task1(){
    // let a = prompt("a = ", 0);
    // let b = prompt("b = ", 0);
    // console.log(+a + +b);
}
function task2(){
    console.log(6.35.toFixed(1) == 6.3)
}
function task3(){
    // function readNumber(){
    //     let input_mes;
    //     while (!isFinite(input_mes)){
    //         input_mes = prompt('vvedite chislo', 0)
    //     }
    //
    //     if (input_mes === null || input_mes === '') return null;
    //     return +input_mes;
    //
    // }
    //
    // let num = readNumber();
    // alert(num);
}
function task4(){
    function random(min, max){
        let ran = Math.random();
        return min + (max - min) * ran;
    }
    console.log(random(1, 5));
    console.log(random(1, 5));
    console.log(random(1, 5));

}
function task5(){
    // function randomInteger(min, max) {
    //     let ran = Math.random();
    //     return min + Math.round(ran * (max - min));
    // }
    function randomInteger(min, max) {
        let ran = min + Math.random() * (max + 1 - min);
        return  Math.floor(ran);
    }
    console.log(randomInteger(1, 5));
    console.log(randomInteger(1, 5));
    console.log(randomInteger(1, 5));
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
