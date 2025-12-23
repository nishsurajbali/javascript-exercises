const repeatString = function(s, x) {
    let repeatedString = [];
    if (x > 0) {
        for (i = x; i > 0; i--){
            repeatedString += s;
        }
    } else if (x < 0) {
        repeatedString += "ERROR"
    } else {
        repeatedString += "";
    }

    return repeatedString;
};

console.log(repeatString("test", 4))

// Do not edit below this line
module.exports = repeatString;
