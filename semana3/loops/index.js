// interpretação de código
//  EXERCÍCIO 1
//10


//EXERCÍCIO 2

//a.
// 19
// 21
// 23
// 25
// 27
// 30

//b.
// sim
// adicionando numero <=30 ;

// DESAFIO 1
// 0
// 00
// 000
// 0000
// 3

//Escrita de código

//EXERCÍCIO 3
//a.
// let array_original = [1, 2, 3, 4, 5];
// for (let array of array_original){
//     console.log(array);
// }

//b.
// let array_original = [1, 2, 3, 4, 5];
//  for (let array of array_original){
//      console.log(array /10);
//  }

//c.
//  let array_original = [1, 2, 3, 4, 5];
// for ( let i = 0; i < 5; i++){
//     if(array_original[i] % 2 === 0){
//     array_original[i] =  array_original[i] 
    
//     }else{
//     array_original.splice(i, 1);
//     }
// }
// console.log(array_original)

//d.
// let array_original = [1, 2, 3, 4, 5];
// for ( let i = 0; i < 5; i++){
//     array_original[i] =  String(array_original[i]);
//     console.log("O elemento do índex", String(i), "é",array_original[i])
// }


//e.
// let valorMaximo = 0;
// let valorMinimo = 80;
// let array_original = [8, 7, 30, 4, 9];

// for ( let i = 0; i < 5; i++) {
//   if (valorMinimo > array_original[i]){
//     valorMinimo = array_original[i];
//   }
//   if(valorMaximo < array_original[i]){
//       valorMaximo = array_original[i];
//   }
// }
// console.log("O maior número é ", valorMaximo, " e o menor é ", valorMinimo);

// Desafio 2
// alert("Vamos brincar de adivinhar? chame um amigo e se divita!");
// let numero_pensado = Number (prompt("Digite um número que o seu amigo possa adivinhar?"));
// let chute;
// var tentativas = 0;

// while(numero_pensado !== chute){
//     chute = Number(prompt(" tente um número"));
//     console.log("O número chutado foi:", chute);
//     tentativas++
//     if(chute === numero_pensado){
//         console.log("parabéns! Acertou!");
//         console.log("O número de tentativas foram " + tentativas);
//     }else if ( chute > numero_pensado){
//         console.log("Errrrrrrrou, é menor")
//     } else if (chute < numero_pensado){
//         console.log("Errrrrrrrou, é maior")
//     } 
// }

//DESAFIO 3

alert("Vamos brincar de adivinhar? O desafio será o computador, prepare-se!");
let numero_pensado = Math.floor ((Math.random() * 100) + 1);
let chute;
var tentativas = 0;
alert("tuk tuk tuk... blu blu blu... pxiiiiii... computador escolheu um número.");
while(numero_pensado !== chute){
    chute = Number(prompt(" Tente adivinha o número que o computador escolheu hehehe"));
    console.log("O número chutado foi:", chute);
    tentativas++
    if(chute === numero_pensado){
        console.log("parabéns! Acertou!");
        console.log("O número de tentativas foram " + tentativas);
    }else if ( chute > numero_pensado){
        console.log("Errrrrrrrou, é menor")
    } else if (chute < numero_pensado){
        console.log("Errrrrrrrou, é maior")
    } 
}
// foi muito fácil fazer este joguinho! pesquisar um pouco mais sobre o assunto.