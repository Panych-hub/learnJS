/*

function foo() {
    return this;
}

let bar = {
    foo,

    baz() {
        return this;
    },
};

// `foo`
console.log(
    foo(),       // global или undefined

    bar.foo(),   // bar
    (bar.foo)(), // bar ???

    (bar.foo = bar.foo)(), // global ???
);

// `bar.baz`
console.log(bar.baz()); // bar

let savedBaz = bar.baz;
console.log(savedBaz()); // global
*/


var x = 10;

let foo = {
    x: 20,

    // Динамический `this`.
    bar() {
        return this.x;
    },

    // Лексический `this`.
    baz: () => this.x,

    qux() {
        // Лексический в рамках данного вызова.
        let arrow = () => this.x;

        return arrow();
    },
};

console.log(
    foo.bar(), // 20, из `foo`
    foo.baz(), // 10, из global
    foo.qux(), // 20, из `foo` и стрелочной функции
);