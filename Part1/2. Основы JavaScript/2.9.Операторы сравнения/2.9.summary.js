/*
Сравнение
строковое - сравниваются посимвольно, используется Unicode для сравнения
при сравнении разных типов приводит каждое из них к числу

== - оператор нестрогого равенства - сравниваются значения
null == undefined

=== - оператор строгого равенства

*/
console.log('2' > 1);

/*
5 > 4 -> t
"ананас" > "яблоко" -> f
"2" > "12" ->t
undefined == null -> t
undefined === null -> f
null == "\n0\n" -> f
null === +"\n0\n" -> f
*/
