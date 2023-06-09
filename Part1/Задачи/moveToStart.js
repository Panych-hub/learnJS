function moveToStart(data, n){
    if (n<data.length) return data.slice(data.length - n).
        concat(data.slice(0, n - 1))
    else return data
}


console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]
console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]
console.log(moveToStart([1, 2, 3, 4, 5], 10)); // [1, 2, 3, 4, 5]