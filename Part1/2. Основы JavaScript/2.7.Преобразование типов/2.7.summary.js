// Строковое преобразование

let value = true;
console.log(String(value));

// Числовое преобразование

/*
undefined -> NaN
null -> 0
true/ false -> 1/ 0
string:
Пробельные символы по краям обрезаются
"" -> 0
!"" -> число /  NaN
*/

console.log(Number("   123   \n"));
console.log(Number("1\n2"));


// Логическое преобразование
// 0, null, undefined, NaN, "" -> false
// else, "0" -> true

console.log(Boolean("0"));