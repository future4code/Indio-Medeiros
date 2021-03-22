"use strict";
exports.__esModule = true;
exports.createArrayOfNumbersMissingAnumber = exports.searchMissingNumber = void 0;
function searchMissingNumber(array) {
    var expectedSum = 5050;
    var sum = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var number = array_1[_i];
        sum += number;
    }
    return expectedSum - sum;
}
exports.searchMissingNumber = searchMissingNumber;
var createArrayOfNumbersMissingAnumber = function () {
    var randomNumber = Math.floor(Math.random() * 100 + 1);
    var maxArraySize = 100;
    var arrayNumbers = [];
    for (var i = 1; i <= maxArraySize; i++) {
        if (i !== randomNumber) {
            arrayNumbers.push(i);
        }
    }
    return { arrayNumbers: arrayNumbers, randomNumber: randomNumber };
};
exports.createArrayOfNumbersMissingAnumber = createArrayOfNumbersMissingAnumber;
var arrayTest = exports.createArrayOfNumbersMissingAnumber();
console.log("result:", searchMissingNumber(arrayTest.arrayNumbers), "expected:", arrayTest.randomNumber);
