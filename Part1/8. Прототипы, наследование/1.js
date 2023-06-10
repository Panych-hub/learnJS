let a = {a: 1};
let b = {
    _proto_: a
}
console.log(b._proto_);
console.log(Object.getPrototypeOf(a));
console.log(Object.getPrototypeOf(b));
let c = Object.create(a);
console.log(Object.getPrototypeOf(c));