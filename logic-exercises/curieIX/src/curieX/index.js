function getMaxValue(arrayHouse) {
    var maxValue = 0;
    var aux = 0;
    var count = 0;
    function getMaxValueUsingRecursion(arrayHouse, count) {
        if (count === arrayHouse.length) {
            return maxValue;
        }
        for (var i = count; i < arrayHouse.length; i++) {
            if (i < arrayHouse.length) {
                aux += arrayHouse[i];
            }
            i++;
        }
        if (aux > maxValue) {
            maxValue = aux;
        }
        aux = 0;
        count++;
        getMaxValueUsingRecursion(arrayHouse, count);
    }
    getMaxValueUsingRecursion(arrayHouse, count);
    return maxValue;
}
var result2 = getMaxValue([1, 2, 3, 1]);
console.log(result2);
