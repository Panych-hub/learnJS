"use strict";
console.log(this);

/*
This зависит от того, когда и какая функция была запущена
внутри функции?
нет-> in script or module
    script - тот код, который запускается по умолчанию
    this = {object global}
    host меняет this
        node -> {}

    module - запуск кода с определенным параметром
    this = undefined
да -> Это normal function
    нет -> in arrow function
        перейти к родительскому окружению, где она была определена
    да ->
        вызов нормальной функции всегда происходит с минимум одним аргументом - this
        this всегда связывается с каким-то значением в момент вызова функции
        по умолчанию связан с undefined

        смотрим, как функция вызывается:

        func.call(context, ...args);
        func.apply(context, args);
        func.bind(context)();


        видим new -> this = {}

        dot нотация - идентификатор + точка + идентификатор
        функция вызвана через дот нотацию? -> this = theObj

        -> this = undefined
*/

function func(){
    console.log(this);
}

func.call({a: "2"});
func.apply({a: "3"});
func.bind({a: "4"})();

new func();
new func;

func();

const theObj = {
    name: "2",
    doLogThis: function () {
        console.log(this);
    }
}
let doLogThisGlobal = theObj.doLogThis;
doLogThisGlobal();

/*setTimeout(theObj.doLogThis, 1);
по спецификации должно быть Undefined, но так setTimeout - внешний API

чтобы понять, чему равен this, нужно смотреть на то, где вызывается функция
this - выражение языка JS, поведение которого похоже на поведение
идентификатора, но связать значение с this, мы можем только особо формой вызова
normal function*/

const z = {
    name: "2",
    muFunc: () => {
        return this.name;
    }
}

const baz = z.muFunc();
console.log(baz);

function makeUser(){
    return {
        name: "John",
        ref: this
    }
}
let test = {
    makeUser: makeUser
}

let user = test.makeUser();
console.log(user.ref.name);


let obj = {
    met1(){
        console.log(this)
    },
    met2: () => {console.log(this)}
}
obj.met1();
obj.met2();