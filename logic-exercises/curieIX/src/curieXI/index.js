function getNumberDifferent(array) {
    var numberDifferent;
    if (array.length === 0) {
        return "array vazio";
    }
    for (var i = 0; i < array.length; i++) {
        if (i === 0) {
            array = array.sort();
        }
        if (!numberDifferent && array[i] !== array[i + 1]) {
            numberDifferent = array[i];
        }
        i++;
    }
    return numberDifferent;
}
var arrayTest = [4, 1, 2, 1, 2];
var result = getNumberDifferent(arrayTest);
console.log(result);
