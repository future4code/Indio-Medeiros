//Exercícios de interpretação de código

/*Exercícios de interpretação de código


EXERCÍCIO 1

1 - recebe dados do usuário e guarda na memoria com endereço "respostaDoUsuario"
2 - tranforma a variável "respostaDoUsuario" para o tipo número e armazena em uma variável chamada "numero"
3 - dentro de uma condição, verifica se o resto da divisão dos dados recebidos é igual a 0
4 - se o resultado for verdadeiro, ou seja, igual a 0, o primeiro bloco é executado (Passou no teste.)
5 - se o resultado for falso, ou seja, diferente de 0, o segundo bloco de código será executado (Não passou no teste.)

O tipo de numero para passar no teste é um numero par
O tipo de numero para não passar no teste é um numero ímpa

*/

/*
EXERCÍCIO 2

a. o Código serve para dar opções de escolha ao usuário, mostrando o preço da fruta que foi selecionada

b. O preço da fruta  maçã é R$  2.25

c. O preço da fruta  Pêra  é  R$  5

*/

/*
EXERCÍCIO 3

a.  uma variável constante recebe um  numero do usuário e transforma do tipo String para numero

b. numero = 10   --->  Esse número passou no teste  e em seguida uma mensagem de erro, pois a variável mensagem não consegue ser acessada fora do bloco if

    numero = -10 ---> a mudança de tipo string para numero faz com que mude o valor negativo para positivo e por isso segue acionando a condição.
c. em ambos a mensagem é impressa "Esse número passou no teste" seguida de erro por não definição da variável "mensagem".
ou seja, a variável foi definida no bloco da condição,  mas não dentro do objeto global
*/


//Exercícios de escrita de código

//EXERCÍCIO 4

// let idade = Number(prompt("Qual a é sua idade?"));

// if(idade >= 18){
//     console.log("Você pode dirigir");
// }else{
//     console.log("Você não pode dirigir");
// }

//EXERCÍCIO 5

// let turno = prompt("Qual é o seu turno de estudos? M = matutino; V = Vespertino; N = noturno").toUpperCase();


// // if (turno === "M"){
// //     console.log("Bom Dia!");
// // }else if (turno === "V"){
// //     console.log("Boa Tarde!");
// // }else if (turno === "N"){
// //     console.log("Boa Noite!");
// // }

// //EXERCÍCIO 6

// switch(turno){
//     case "M":
//         console.log("Bom Dia!");
//     break;

//     case "V":
//         console.log("Boa Tarde!");
//     break;

//     case "N":
//         console.log("Boa Noite!");
//     break;
// }

//EXERCÍCIO 7

// let genero_do_filme = prompt("Qual é o gênero do filme?").toLocaleLowerCase();
// let preco_do_ingresso = Number(prompt("Qual é o preço do ingresso?"));

// if (genero_do_filme === "fantasia" && preco_do_ingresso < 15){
//     console.log("Bom filme!");
// }else{
//     console.log("Escolha outro filme :(");
// }

//DESAFIO 1

// let genero_do_filme = prompt("Qual é o gênero do filme?").toLocaleLowerCase();
// let preco_do_ingresso = Number(prompt("Qual é o preço do ingresso?"));

// if (genero_do_filme === "fantasia" && preco_do_ingresso < 15){
//    let snack = "SNACK";
//    snack = prompt(`Qual ${snack} que você quer comprar? picoca? chocolate?... digite:`)
//     console.log("Bom filme!");
//     console.log(`... com ${snack}`);
// }else{
//     console.log("Escolha outro filme :(");
// }

// DESAFIO 2

let nome_do_cliente = prompt("Qual é o seu nome?");
let tipo_do_jogo = prompt("Qual é o tipo de jogo? IN = interonacional ou DO = doméstico?").toUpperCase();
let etapa_do_jogo = prompt("Qual é a etapa do jogo? SF = semifinais; DT = decisão do terceiro lugar; FI = Final?").toUpperCase();
let categoria = Number(prompt("qual é a categoria? 1, 2, 3 ou 4?"));
let quantidade_de_ingresso = Number(prompt(" Quantos ingressos você quer?"));
let valor_do_ingresso;
let valor_total;

if ( etapa_do_jogo == "SF"){
    etapa_do_jogo = "Semifinal";
    switch(categoria){
        case 1:
            valor_do_ingresso = 1320;
        break;

        case 2:
            valor_do_ingresso = 880;
        break

        case 3:
            valor_do_ingresso = 550;
        break;

        case 4:
            valor_do_ingresso = 220;
        break;
    }
}else if(etapa_do_jogo == "DT"){
    etapa_do_jogo = "Decisão do 3º lugar";
    switch(categoria){
        case 1:
            valor_do_ingresso = 660;
        break;

        case 2:
            valor_do_ingresso = 440;
        break

        case 3:
            valor_do_ingresso = 330;
        break;

        case 4:
            valor_do_ingresso = 170;
        break;
    }
}else if(etapa_do_jogo == "FI"){
    etapa_do_jogo = "Final";
    switch(categoria){
        case 1:
            valor_do_ingresso = 1980;
            
        break;

        case 2:
            valor_do_ingresso = 1320;
        break

        case 3:
            valor_do_ingresso = 880;
        break;

        case 4:
            valor_do_ingresso = 330;
        break;
    }
}else{
    console.log("algum dado está incorreto, favor conferir e repetir a operação");
}
if (tipo_do_jogo == "IN"){
    tipo_do_jogo = "Internacional";
    valor_do_ingresso /= 4.10;
    valor_total = valor_do_ingresso * quantidade_de_ingresso;
}else{
    tipo_do_jogo = "Nacional";
    valor_total = valor_do_ingresso * quantidade_de_ingresso;
}

console.log("---Dados da compra---");
console.log("Nome do cliente: " + nome_do_cliente);
console.log("Tipo do jogo: " + tipo_do_jogo);
console.log("Etapa do jogo: " + etapa_do_jogo);
console.log("Categoria: " + categoria);
console.log("Quantidade de Ingressos: " + quantidade_de_ingresso + " ingressos.");
console.log("---Valores---");
console.log("Valor do ingresso: " + valor_do_ingresso );
console.log("Valor total: " + valor_total);