/*
    после равенства выполняется до ближайшего break
*/
let a = 2 + 2;

switch (a) {
    case 3:
        console.log( 'Маловато' );
        break;
    case 4:
        console.log( 'В точку!' );

    case 5:
        console.log( 'Перебор' );

    default:
        console.log( "Нет таких значений" );
}

function task1() {
    let browser = 'Opera';
    if (browser === 'Edge') {
        console.log(1);
    } else if (browser === 'Chrome'
        || browser === 'Chrome'
        || browser === 'Firefox'
        || browser === 'Safari'
        || browser === 'Opera' ){
        console.log(2);
    }   else console.log(3);
}
task1()
function task2() {
    const number = 2;
    switch (number) {
        case (0):
            console.log("0");
            break;

        case (1):
            console.log("1");
            break;

        case (2):
        case (3):
            console.log("2 or 3")
            break;

    }
}
task2()