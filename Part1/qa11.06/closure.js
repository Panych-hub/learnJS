// проблема нисходящего функарга
/*let x = 10;

function foo() {
    console.log(x);
}

function bar(funArg) {
    let x = 20;
    funArg(); // 10, но не 20!
}

// Передаем `foo` в качестве аргумента в `bar`.
bar(foo);*/

// проблема восходящего функарга
function foo() {
    let x = 10;

    // Замыкание, захватываем окружение `foo`.
    function bar() {
        return x;
    }

    // Восходящий фунарг.
    return bar;
}

let x = 20;

// Вызов `foo` возвращает замыкание `bar`.
let bar = foo();

bar(); // 10, но не 20!