"use strict";
function task1(){
    function checkBrackets (str){
        let stack = [];
        for (let i of str){
            if (i === '(') stack.push('(')
            else {
                if ('(' !== stack.pop()) return false;
            }
        }
        return stack.length === 0;
    }

    console.log(checkBrackets('()'));
    console.log(checkBrackets('()()'));
    console.log(checkBrackets('(()'));
    console.log(checkBrackets(')()('));
}
function task2(){
    let typeOfBrackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    function checkBrackets (str){
        let stack = [];
        for (let i of str){
            if (Object.values(typeOfBrackets).includes(i)) stack.push(i)
            else {
                if (typeOfBrackets[i] !== stack.pop()) return false;
            }
        }
        return stack.length === 0;
    }

    console.log(checkBrackets('()'));
    console.log(checkBrackets('()[]'));
    console.log(checkBrackets('[}'));
    console.log(checkBrackets('()[]{}'));
}
function task3(){
    function arrWithoutRepeat (arr){
        let setDel = new Set;
        let setAdd = new Set;
        for (let i of arr){
            // console.log(i);
            if (!setDel.has(i)){
                if (setAdd.has(i)) {
                    setAdd.delete(i);
                    setDel.add(i);
                }
                else {
                    setAdd.add(i);
                }
            }
        }
        return Array.from(setAdd);
    }

    console.log(arrWithoutRepeat([1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7])); // [2, 3, 5]
    console.log(arrWithoutRepeat([1, 1, 2])); // [2]

}
function task4(){
    function arrWithoutRepeat (arr){
        let ans = [];
        let setAdd = {};
        for (let i of arr){
            if (!setAdd[i]) setAdd[i] = 1
            else setAdd[i] += 1
        }
        for (let i in setAdd){
            if (setAdd[i] === 1) ans.push(+i)
        }
        return ans;
    }

    console.log(arrWithoutRepeat([1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7])); // [2, 3, 5]
    console.log(arrWithoutRepeat([1, 1, 2])); // [2
}
function task5(){
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    const user = new User('N', 22);
    console.log(user);
    console.log(user instanceof User);
}
//https://www.youtube.com/watch?v=jf5TkGzWqiM&list=PL6DxKON1uLOG0carDseYltoAovmnjjhZk&index=8&t=2216s
console.log('task1');
task1();
console.log('\ntask2');
task2();
console.log('\ntask3');
task3();
console.log('\ntask4');
task4();
console.log('\ntask5');
task5();
