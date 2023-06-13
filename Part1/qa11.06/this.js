// "use strict";
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
    (bar.foo)(), // bar

    (bar.foo = bar.foo)(), // global
);

// `bar.baz`
console.log(bar.baz()); // bar

let savedBaz = bar.baz;
console.log(savedBaz()); // global



var x = 10;

let foo1 = {
    x: 20,

    // Динамический `this`.
    bar() {
        return this.x;
    },

    // Лексический `this`.
    baz: () => this.x,
    // baz: () => this,

    qux() {
        // Лексический в рамках данного вызова.
        let arrow = () => this.x;

        return arrow();
    },
};

console.log(
    foo1.bar(), // 20
    foo1.baz(), // node: undefined, browser: 10
    foo1.qux(), // 20
);