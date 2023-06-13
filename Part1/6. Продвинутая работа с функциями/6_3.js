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
            return function (item) {
                return (a <= item) && (item <= b)
            }
        }
        function inArray(arr){
            return function (item) {
                // return item in arr;
                return arr.includes(item)
            }
        }
        let arr = [1, 2, 3, 4, 5, 6, 7];

        console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

        console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2
    },
    function (){
        function byField(name) {
            // return function (a, b) {
            //     return a[name] > b[name] ? 1 : -1;
            // };
            return (a, b) =>  a[name] > b[name] ? 1 : -1;
        }
        let users = [
            { name: "John", age: 20, surname: "Johnson" },
            { name: "Pete", age: 18, surname: "Peterson" },
            { name: "Ann", age: 19, surname: "Hathaway" }
        ];
        console.log(users.sort(byField("name")))
        console.log(users.sort(byField("age")))
    },
    function (){
        // function makeArmy() {
        //     let shooters = [];
        //
        //     let i = 0;
        //     while (i < 10) {
        //         function create() { // функция shooter
        //             (function(){
        //                 console.log( i );
        //             })()
        //             // должна выводить порядковый номер
        //         };
        //         let shooter = create;
        //         shooters.push(shooter);
        //         i++;
        //     }
        //
        //     return shooters;
        // }
        // function makeArmy() {
        //     let shooters = [];
        //
        //     let i = 0;
        //     while (i < 10) {
        //         function create() { // функция shooter
        //             let a = i;
        //             return function(){
        //                 console.log( a );
        //             }
        //             // должна выводить порядковый номер
        //         };
        //         let shooter = create();
        //         shooters.push(shooter);
        //         i++;
        //     }
        //     return shooters;
        //}
        function makeArmy() {
            let shooters = [];

            let i = 0;
            while (i < 10) {
                let j = i;
                let shooter = function() { // функция shooter
                    console.log( j ); // должна выводить порядковый номер
                };
                shooters.push(shooter);
                i++;
            }

            return shooters;
        }

        let army = makeArmy();

        army[0]();
        army[5]();
    },
    function (){

    }]

for (let i=0; i<mainArr.length; i++){
    console.log('task' + i);
    mainArr[i]();
    console.log();
}