
"use strict";
let mainArr = [
    function (){
        let result;
        let a = 1;
        let b = 2;
        result = (a + b < 4) ? "Мало" : "Много";
        console.log(result);
    },
    function (){

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
