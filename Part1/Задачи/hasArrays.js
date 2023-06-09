function hasArrays(data){
    /*return Boolean(data.map((item)=>Array.isArray(item))
        .reduce((sum, item) => sum + +item, 0))*/

    return data.map((item)=>Array.isArray(item))
        .reduce((sum, item) => sum || item, false)
}

const data1 = [false, true, [1, 2], {}, [], 1, NaN];
console.log(hasArrays(data1)); // true
const data2 = [];
console.log(hasArrays(data2)); // false