const reverseString = function(stringToReverse) {
    let string = "";
    let letters = stringToReverse.split("");

    for (let i = letters.length - 1;i >= 0; i--) {
        string += letters[i];
    }

    return string;
};

// Do not edit below this line
module.exports = reverseString;
