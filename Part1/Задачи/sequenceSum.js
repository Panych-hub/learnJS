function sequenceSum(start, end) {
    if (start > end) return NaN
    else if (start === end) return start
    else return sequenceSum(start, end-1) + end;
}
console.log(sequenceSum(1, 5)); // 1 + 2 + 3 + 4 + 5 = 15
console.log(sequenceSum(4, 10)); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
console.log(sequenceSum(-3, 2)); // (-3) + (-2) + (-1) + 0 + 1 + 2 - -3