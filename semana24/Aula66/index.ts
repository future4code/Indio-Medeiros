//1a.
//Ordem de números crescente
const printNumbers = (n: number) => {
    if(n >= 0){
        printNumbers(n - 1);
        console.table(n)
    }
}
//printNumbers(100)

//1b.
//Ordem de números decrescente
const printNumbers2 = (n: number) => {
    if(n >= 0){
        console.log(n)
        printNumbers2(n -1)
    }
}
//printNumbers2(10)

//2
//calculo da soma dos numeros inteiro de 0 a n
const calculateSumto = (n: number, acc: number = 0): number => {
    if(n === 0){
        return acc;
    }
    return calculateSumto(n - 1, acc + n)
}

//console.log(calculateSumto(10))

//3
//calculo da soma dos numeros intero de 0 a n de forma interativa
const calculateSumTo = (n: number): number => {
    let sum = 0;
    for (let i = 0; i <= n; i++){
        sum += i;
    }
    return sum
}
// console.log(calculateSumTo(10))

//4
//imprimir todos elementos de um array
const printArray = (arr: number[], i: number = arr.length -1) => {
    if(i >= 0){
        printArray(arr, i - 1);
        console.log(`Elemento ${i}: `, arr[i] );
    }
}

const arrayNumber = [1,2,3,4,5]
printArray(arrayNumber)
