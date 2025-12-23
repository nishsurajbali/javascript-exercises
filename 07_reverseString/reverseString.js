const reverseString = function(s) {
    let newString = ""
    for (i = s.length - 1 ; i>=0; i--){
        newString += s[i]
    }
    return newString;
};

console.log(reverseString("Hello"))

// Do not edit below this line
module.exports = reverseString;
