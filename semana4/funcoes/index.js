// Exercícios de interpretação de código

//EXERCÍCIO 1

//a.
//10
//50

//b.
//50

//EXERCÍCIO 2

//a.
//Darvas 
//Caio

//b. 
//Amanda
//Caio

//EXERCÍCIO 3
//filtrarNumerosPares

// Exercícios de escrita de código
//EXERCÍCIO 4

//a.
// function falarSobreMim () {
//     console.log("Eu me chamo Índio Medeiros, tenho 32 anos, moro em Salvador e sou Polímata")
// }

//b.
// function identificarEstudante (nome, number, cidade, boolean ) {
// if (boolean){  
//     boolean = "SOU";
// }else {
//     boolean = "NÂO SOU";
// }
// return `Eu sou ${nome}, tenho ${number} anos, moro em ${cidade} e ${boolean} estudante.`
// }

// EXERCÍCIO 5

//a.
// function somar (numero1, numero2){
//    return numero1 + numero2;

// }
// console.log (somar(2, 5));

//b.
// function informarNumeroMaior (numero1, numero2){
//     if (numero1 >= numero2){
//         return true;
//     } else{
//         return false;
//     }
// }
// console.log(informarNumeroMaior(10 , 80))

//c.
// function repetirMensagem (mensagem){
//     for(let i = 0; i < 10; i++){
//         console.log(mensagem)
//     }
// }

// EXERCÍCIO 6
//a.
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// function contarElementos (array){
//     return array.length ;
// }

// //b.
// let  identificarNumeroPar = (numero) => {
//     if (numero % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// //c.
// let filtrarNumerosPares = (array) =>{
//    let arrayPar = [];
//     for (let i = 0; i < array.length; i++){
//         if (array[i] % 2 === 0){
//             arrayPar.push(array[i]) ;
//         }
//     }
//     return arrayPar;
// }

// //d.
// let filtrarNumerosPares2 = (array) =>{
//     let arrayPar = [];
//      for (let i = 0; i < array.length; i++){
//          if (identificarNumeroPar(array[i]) ){
//              arrayPar.push(array[i]) ;
//          }
//      }
//      return arrayPar;
//  }

// DESAFIOS 

// EXERCÍCIO 1
// // 1.
// let imprimirMensagem = (mensagem) => {
//     console.log (mensagem);
// }

// //2.
// let imprimirMensagem2 = (valor1, valor2) => {
//     imprimirMensagem(valor1 + valor2)
// }

// EXERCÍCIO 2

// a.
//     let multiplicadorDePares = (array) => {
//         let arrayParMultiplicado = [];
//         for (let i = 0; i < array.length; i++){
//             if (array[i] % 2 === 0){
//                 arrayParMultiplicado.push(array[i] * 2);
//             }
//         }
//         return arrayParMultiplicado;
//     }
   
// // b.
// function maiorNumero_do_Array (array){
//     let maiorNumero = 0;
//     for (let i = 0; i < array.length; i++){
//         if (array[i] > array[i+1]){
//             if(array[i] > maiorNumero){
//             maiorNumero = array[i]
//             }
//         }
//     }
//     return maiorNumero;
// }

// // c.

// function mostrarIndice_do_NumeroMaior (array){
//     let maiorNumero = [];
//     for (let i = 0; i < array.length; i++){
//         if (array[i] > array[i+1]){
//             if(array[i] > maiorNumero){
//             maiorNumero = array[i]
//             }
//         }
    
//     }
//     for (let i = 0; i < array.length; i++){
//         if ( maiorNumero === array[i]){
//             return i
//         }
//     }
// }

//d
function organizarArray (array) {
    let pivor;
    let j = 8;
    let novoArray1 = [];
    for (let i = 0; i < array.length; i++){
        if(j > array.length/2 -1){
            pivor =  array[j];
            array[j] = array[i];
            array[i] = pivor;
            novoArray1[i] = pivor
            novoArray1[j] = array[j]
                j--
            }
    }
    return novoArray1;
}

