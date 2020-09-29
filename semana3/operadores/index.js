// Exercícios de interpretação de código
/* 
1.

a.  false
b.  false
c.  true
e.  boolean

2.

a.  undefined
b.  null
c.  11
d.  3
e.  [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f.  9

*/


// Exercícios de escrita de código

// 1.

// let suaIdade = Number(prompt("Qual é a sua idade?"));
// let idadeAmigo = Number(prompt("Qual a idade do seu melhor amig@?"));
// let idadeMaior = suaIdade > idadeAmigo;
// console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior);

// 2.
// let numeroPar = Number(prompt("Digite um numero par"));
// console.log(numeroPar % 2);
// O resto da divisão de números pares o resultado é sempre zero
//O resto da divição de números ímpares o resultado é sempre 1

// 3.
// let listaDeTarefas = [];
// listaDeTarefas[0] = prompt("tarefa 0: Escreva 1 tarefa que você faz pela manhã");
// listaDeTarefas[1] = prompt("tarefa 1: Escreva 1 tarefa que você faz a tarde");
// listaDeTarefas[2] = prompt("tarefa 2: Escreva 1 tarefa que você faz a noite");
// console.log(listaDeTarefas);
// let tarefaRealizada = prompt("qual a tarefa você já realizou? 0, 1 ou 2?");
// listaDeTarefas.splice(tarefaRealizada, 1);
// console.log(listaDeTarefas);

//4.
// let nomeDoUsuario = prompt("Qual é o seu nome?");
// let emailDoUsuario = prompt("informe o seu e-mail");
// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//Desafios Extras

//1.
//a.
// let graus_fahrenheit = 77;
// let kelvin = (graus_fahrenheit - 32) *5/9 + 273.15;
// console.log(kelvin + "K");
// //b.
// let graus_celsius = 80;
// graus_fahrenheit = (graus_celsius) *9/5 + 32;
// console.log(graus_fahrenheit + "°F");

// //c.
// graus_celsius = 30;
// graus_fahrenheit = (graus_celsius) *9/5 + 32;
// console.log(graus_fahrenheit + "°F");
// kelvin = (graus_fahrenheit - 32) *5/9 + 273.15;
// console.log(kelvin + "K");
// //d.

// graus_celsius = prompt("digite os graus celsius que deseja convertar em fahrenheit e kelvin");
// graus_fahrenheit = (graus_celsius) *9/5 + 32;
// console.log(graus_fahrenheit + "°F");
// kelvin = (graus_fahrenheit - 32) *5/9 + 273.15;
// console.log(kelvin + "K");

//2.
//a.
// let quilowatt_hora = 0.05;
// let consummo_quilowatt = 280;
// let valor_a_pagar = consummo_quilowatt * quilowatt_hora;
// console.log("A residência deve pagar: R$", valor_a_pagar);

// //b.
// let porcentagem_de_desconto = valor_a_pagar * 15/100;
// valor_a_pagar -= porcentagem_de_desconto; 
// console.log("Com o desconto de 15% a residência deve pagar: R$", valor_a_pagar);

//3.
//a.
let libra = 20;
let quilograma = libra * 0.454; 
console.log(`20lb equivalem a ${quilograma} kg`);

//b
let onca = 10.5;
quilograma = onca * 0.0283495;
console.log(`10.5oz equivalem a ${quilograma} kg`);

//c
let milha = 100;
let metro = milha * 1609.34;
console.log(`100mi equivalem a ${metro} m`);

//d
let pes = 50;
metro = pes * 0.3048;
console.log(`50ft equivalem a ${metro} m`);

//e
let gal = 103.56;
let litro = gal * 3.78541;
console.log(`103.56gal equivalem a ${litro} l`);

//f
xicara = 450;
litro =  xicara * 0.24;
console.log(`450 xic equivalem a ${litro} l`);

//g
xicara = prompt("digite o numeros de xícaras para serem convertidas em litros");
litro =  xicara * 0.24;
console.log(`450 xic equivalem a ${litro} l`)
