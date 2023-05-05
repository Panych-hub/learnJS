"use strict";
let mainArr = [function (){
        let a = 1, b = 1;
        let c = ++a; //2
        let d = b++; //1
        console.log(c, d);
    },
    function (){
        let a = 2;
        let x = 1 + (a *= 2);
        console.log(a, x); // 4, 5
    },
    function (){
        /*
"" + 1 + 0 = "10"
"" - 1 + 0 = -1
true + false = true -> 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = 9px
"$" + 4 + 5 = $45
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5"
"  -9  " - 5 = -14
null + 1 = 1
undefined + 1 = NaN
" \t \n" - 2 = -2

        */
    },
    function (){
        let a = "1";
        let b = "2";
        console.log(+a + +b);
    },
    function (){

    }]

for (let i=0; i<mainArr.length; i++){
    console.log('task' + i);
    mainArr[i]();
    console.log();
}
