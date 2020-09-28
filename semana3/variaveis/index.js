/*Respostas das questões de interpretação 

1 - Respostas:

    10
    10 5

2 - Respostas:

    10 10 10

*/


/*Exercícios de escrita de código*/

// 1º EXERCÍCIO
let nome;
let idade;
console.log(typeof(idade), typeof(nome));
//ausência de um valor ou uma variável que não foi inicializada
//não foram atribuídos valores nas variáveis
//valor indefinido

nome = prompt("qual é o seu nome?");
idade = prompt("qual é a sua idade?")
console.log(typeof(idade), typeof(nome));
//as duas variáveis foram convertidas para o tipo String

console.log(`Olá ${nome},  você tem ${idade} anos`);


// 2º EXERCÍCIO
let resposta1 = prompt("1. Onde você mora?");
let resposta2 = prompt("2. Qual é a sua profissão?");
let resposta3 = prompt("3. Pão ou bolacha?");
let resposta4 = prompt("4. onde você nasceu?");
let resposta5 = prompt("5. café ou chá?");

console.log("1. Onde você mora?");
console.log(`Resposta: ${resposta1}`);
console.log(` `);
console.log("2. Qual é a sua profissão?");
console.log(`Resposta: ${resposta2}`);
console.log(` `);
console.log("3. Pão ou bolacha?");
console.log(`Resposta: ${resposta3}`);
console.log(` `);
console.log("4. onde você nasceu?");
console.log(`Resposta: ${resposta4}`);
console.log(` `);
console.log("5. café ou chá?");
console.log(`Resposta: ${resposta5}`);

// 3º EXERCÍCIO

let comidas = ["arroz", "feijão", "castanha", "lentilha", "pão"];
console.log(comidas);
console.log("Essas são as minhas comidas preferidas: ");
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);

comidas[1] = prompt("Qual a sua comida preferida?");
console.log("Nova lista de comidas: ");
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);


// 4º EXERCÍCIO
let perguntas = ["você tem é solteir@?", "você é branc@?", "você é negr@?"];
let resposta = [true, false, true];
console.log (perguntas[0], resposta[0]);
console.log (perguntas[1], resposta[1]);
console.log (perguntas[2], resposta[2]);