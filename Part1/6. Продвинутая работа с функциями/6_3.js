"use strict";
let mainArr = [
    function (){
        function sum(a){
            return function (b){console.log(a+b)}
        }

        sum(1)(2);
        sum(5)(-1);

    },
    function (){
        function inBetween(a, b){
            return function () {
                
            }
        }
        function inArray(arr){

        }
        let arr = [1, 2, 3, 4, 5, 6, 7];

        console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

        console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2
    },
    function (){

    },
    function (){

    },
    function (){

    }]

for (let i=0; i<mainArr.length; i++){
    console.log('task' + i);
    mainArr[i]();
    console.log();
}