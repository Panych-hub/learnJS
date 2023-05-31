
// Пример 1
let a = {
    a: 1,
    b: 2,
    "a": 3,
    c: 4
}

console.log(a); // {a:3, b:2, c:4}

// Пример 2
// const d = {}
// d = {}


// Пример 3
const c = {
    a: 1,
    b: 2
}
function foo(x){
    console.log(x === c);
    x = 15;
    return x;
}

const baz = foo(c);
console.log(baz);

//пример 4
function bar(x){
    x.name = '3';
    return;
}

const bazz = bar(c);
console.log(bazz);
console.log(c);