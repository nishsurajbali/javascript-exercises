const sumAll = function(n, n2) {
    let totalSum = 0
    let max = n2
    let min = n
    if (!Number.isInteger(n) || !Number.isInteger(n2)) {return "ERROR"}
    if (n < 0 || n2 < 0){ return "ERROR";}
    if (n > n2){
        max = n;
        min = n2
    }
    
    for (i=min; i <= max; i++){
        totalSum += i;
    }
    return totalSum;
};

console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
