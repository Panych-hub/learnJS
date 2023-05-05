"use strict";
let mainArr = [
function (){
    const goodsAddedToCart= [
        {
            name: 'JS',
            price: 20
        },
        {
            name: 'React',
            price: 30
        },
        {
            name: 'HTML/CSS',
            price: 202
        }
    ]
    console.log(goodsAddedToCart.reduce((sum, item) =>
        sum + item.price, 0));
},
function (){
    function sum(a, b, c){
        return a + b + c;
    }

    function curry(func) {
        return function curried (...args){

            if (args.length >= func.length){
                return func.apply(this, args);
            } else {
                return function (...args2){
                    return curried.apply(this, args.concat(args2));
                }

            }

        }

    }

    let curriedSum = curry(sum);
    console.log(curriedSum(1, 2, 3));
    console.log(curriedSum(1)(2, 3));
    console.log(curriedSum(1)(2)(3));
},
function (){
    const obj = {
        testProp: 123
    };
    Object.defineProperty(obj, "LogTestProp", {
        value: function() {
            console.log(this.testProp);
        }
    });
    obj.LogTestProp();
    obj.testProp = 345;
    obj.LogTestProp();
},
function (){

},
function (){

}]

for (let i=0; i<mainArr.length; i++){
    console.log('task' + i);
    mainArr[i]();
}
