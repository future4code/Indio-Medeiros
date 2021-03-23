//1a.
//Ordem de números crescente
var printNumbers = function (n) {
    if (n >= 0) {
        printNumbers(n - 1);
        console.table(n);
    }
};
//printNumbers(100)
//1b.
//Ordem de números decrescente
var printNumbers2 = function (n) {
    if (n >= 0) {
        console.log(n);
        printNumbers2(n - 1);
    }
};
//printNumbers2(10)
//2
//calculo da soma dos numeros inteiro de 0 a n
var calculateSumto = function (n, acc) {
    if (acc === void 0) { acc = 0; }
    if (n === 0) {
        return acc;
    }
    return calculateSumto(n - 1, acc + n);
};
//console.log(calculateSumto(10))
//3
//calculo da soma dos numeros intero de 0 a n de forma interativa
var calculateSumTo = function (n) {
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
};
// console.log(calculateSumTo(10))
//4
//imprimir todos elementos de um array
var printArray = function (arr, i) {
    if (i === void 0) { i = arr.length - 1; }
    if (i >= 0) {
        printArray(arr, i - 1);
        console.log("Elemento " + i + ": ", arr[i]);
    }
};
var arrayNumber = [1, 2, 3, 4, 5];
printArray(arrayNumber);
