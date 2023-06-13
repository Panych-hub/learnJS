// "use strict"
// проблема нисходящего функарга
let x = 10;

function foo() {
    console.log(x);
}

function bar(funArg) {
    let x = 20;
    funArg(); // 10, но не 20!
}

// Передаем `foo` в качестве аргумента в `bar`.
bar(foo);


// проблема восходящего функарга
function foo1() {
    let x1 = 10;

    // Замыкание, захватываем окружение `foo`.
    function bar1() {
        return x1;
    }

    // Восходящий фунарг.
    return bar1;
}

x1 = 20;

// Вызов `foo` возвращает замыкание `bar`.
bar1 = foo1();

console.log(bar1()); // 10, но не 20!

//
let a = 1;

if (true) {
    let user = 2;

    function sayHi() {
        console.log(1, 2); // в strict mode ReferenceError
    }
}

sayHi();