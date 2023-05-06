/*
While (condition) {}
do {} while (condition);

for(start; condition; step){}

break
continue

метки:
labelName: for(...){
    break labelName;
}

break должна находиться внутри блока кода
label: {
    break label;
}
*/
"use strict";
let mainArr = [
    function (){
        let i = 3;
        while (i){
            console.log(i--); //3 2 1
        }
    },
    function (){
        let i = 0;
        while (++i < 5) console.log( i ); // 1 2 3 4

        i = 0;
        while (i++ < 5) console.log( i ); // 1 2 3 4 5

    },
    function (){
        for(let i=2; i<=10; i+=2){
            console.log(i);
        }
    },
    function (){
        let n = 10;
        // for(let i=2; i<=n; i++){
        //     let t = true;
        //     for(let j=2; j<=Math.floor(Math.sqrt(i)); j++){
        //         // console.log(i, j);
        //         if (i % j === 0) t = false;
        //
        //     }
        //     if (t) console.log(i);
        // }
        nextPrime:
        for(let i=2; i<=n; i++){
            let t = true;
            for(let j=2; j<=Math.floor(Math.sqrt(i)); j++){
                // console.log(i, j);
                if (i % j === 0) continue nextPrime;

            }
            console.log(i);
        }

    },
    function (){

    }]

for (let i=0; i<mainArr.length; i++){
    console.log('task' + i);
    mainArr[i]();
    console.log();
}
