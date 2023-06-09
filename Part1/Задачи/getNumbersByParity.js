/*const getNumbersByParity = (data, parity) => {
    let dataReturn = [];
    for (let i=0; i<data.length; i++){
        if ((parity === 'even') && (data[i] % 2 === 0)){
            dataReturn.push(data[i] );
        }
        if ((parity === 'odd') && (data[i]  % 2 === 1)){
            dataReturn.push(data[i] );
        }
    }
    return dataReturn;
};*/
const getNumbersByParity = (data, parity) => {
    let dataReturn = [];
    data.forEach((item)=>{
        switch (parity) {
            case 'even': {
                if (item % 2 === 0) dataReturn.push(item);
                break
            }
            case 'odd': {
                if (item % 2 === 1) dataReturn.push(item);
                break
            }
        }
    })
    return dataReturn;
};

const data = [1, 2, 3, 4, 5, 6];

console.log(getNumbersByParity(data, 'even')); // [2, 4, 6];
console.log(getNumbersByParity(data, 'odd')); // [1, 3, 5];`
