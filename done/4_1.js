function task1(){
    // let user = {
    //     name: 'John',
    //     surname: "Smith"
    // }
    // console.log(user);
    // user.name = 'Pete';
    // console.log(user);
    // delete user.name;
    // console.log(user);
    let user = {};
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.name;
}
function task2(){
    function isEmpty(obj){
        // for (prop in obj){
        for (let prop in obj){
            return false;
        }
        return true;
    }
    let schedule = {};
    console.log( isEmpty(schedule));
    schedule["8:30"] = "get up";
    console.log( isEmpty(schedule));
}
function task3(){
    const user = {
        name: "John"
    }
    user.name = "Pete"
    console.log(user.name);
}
function task4(){
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 1330
    };
    let sum = 0;
    for (let prop in salaries){
        sum += salaries[prop];
    }
    console.log(sum);
}
function task5(){
    function multiplyNumeric(obj){
        for (let prop in obj){
            // if (Number(obj[prop])){
            //     obj[prop] *= 2;
            // }
            if (typeof (obj[prop]) == 'number'){
                obj[prop] *= 2;
            }
        }
    }

    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    console.log(menu);
    multiplyNumeric(menu);
    console.log(menu);
}
console.log('task1');
task1();
console.log('\ntask2');
task2();
console.log('\ntask3');
task3();
console.log('\ntask4');
task4();
console.log('\ntask5');
task5();
