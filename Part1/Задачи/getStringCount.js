/*function getStringCount(data) {
    let sumString = 0;

    for (let i in data){
        // console.log(data[i])
        if (data[i] !== null && typeof(data[i]) === "object"){
            sumString += getStringCount(data[i]);
        }
        else if (typeof(data[i]) === "string"){
            sumString += 1;
        }
    }
    return sumString
}*/
function getStringCount(data) {
    let sumString = 0;
    if (typeof(data) === "string") return 1
    else if (data !== null && typeof(data) === "object"){
        for (let i in data){
            sumString += getStringCount(data[i]);
        }
    }
    return sumString
}

console.log(getStringCount({
    first: '1',
    second: { prop: '2' },
    third: false,
    fourth: ['anytime', 2, 3, 4 ],
    fifth: null,
})); // 3

console.log(getStringCount({
    first: '1',
    second: { prop: '2' },
    third: false,
    fourth: ['anytime', "2", '3', 4 ],
    fifth: null,
})); // 5

console.log(getStringCount(['1', '2', ['3']]) )// 3