"use strict";
function task1(){
    function sumTo(n){
        let sum_n = 0;
        for (let i = 0; i <= n; i++){
            sum_n += i;
        }
        return sum_n;
    }
    function sumTo2(n){
        if (n === 1){
            return 1
        }
        else return n + sumTo2(n-1);
    }
    console.log(sumTo(100));
    console.log(sumTo2(100));
}
function task2(){

}
function task3(){

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
