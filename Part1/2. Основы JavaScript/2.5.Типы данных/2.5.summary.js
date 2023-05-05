/*
* 1. Number
* математические операции "безопасны"
* (-(2^53-1); (2^53-1))
* */

let inf = Infinity;
let na = NaN;
console.log((1/ 0));

// NaN - Not-A-Number - не-число
// вычислительная ошибка, NaN - прилипчиво, исключение:
console.log(NaN ** 0);

// 2. BigInt (поддерживаются в Chrome, Edge, Safari, но не в IE)
// символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
console.log(bigInt*bigInt);

// 3. String
let name = "Ivan";
console.log(`Privet, ${name}`);

// 4. Boolean

let isGreater = 4 > 1;
console.log(isGreater);

// 5. null - пусто, значение неизвестно
// 6. undefined - значение не было присвоено
let age;
console.log(age);

// 7. object
// 8. symbol

// оператор typeof
console.log(typeof []);
let newMap = new Map;
console.log(typeof newMap)
console.log(console.log);
function func(){}
console.log(func);

console.log(typeof null);