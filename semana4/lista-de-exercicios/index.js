// Exercícios de interpretação de código
/*
1.
O código é um conversor de moeda, do Dolar para real.
 - o código utiliza uma função para receber do usuário 
 o valor da cotação do Dólar;

 - A função recebe como parâmetro um valor referente 
 a quantidade do dolar;

 - o retorno da função é o dólar multiplicado 
 pela cotação informada pelo usuário; 

 - a função é chamada com a passagem do valor 100 como parâmetro
 - existe um variável prédefinida que guarda o conteúdo
  da chamada da função (o resultado )do valor 100 dólares.

 - Ao final é impresso no console o resultado da função, ou seja, se a cotação 
 do usuário for 2, será impresso o resultado: R$ 200

*/


/*
2.
 O programa calcula o  investimento  e imprime o total do valor acumulado  após o investimento
 
 -existe uma função para calcular o investimento, que recebe dois parâmetros:
    a - o tipo de investimento;
    b - o valor investido;

 -dentro da função o parâmetro passado passa por uma condição, que 
 faz um filtro, comparando com as opções existentes dentro de um Switch case

 - Se o tipo de investimento for diferente das opções fornecida, o programa emite a 
 alerta no navegador "TIPO DE INVESTIMENTO INFORMADO INCORRETO" e o programa encerra os calculos.

 - se for igual, ele vai gerar um montante, que é o valor referente  parâmetro passado multiplicado
 pelo valor referente a cada opção que contem no switch case da função;
    -vai guardar esse valor do montante em uma variável e retorna-la como resultado processado pela função.
 -enfim, imprime o retorno da função no console do navegador.

 No caso dos valores passados no exercicio os resultados serão:
  1 - será impresso na primeira linha do console: 165
  2 - Um alerta será mostrado na tela do navegador com a mensagem ""TIPO DE INVESTIMENTO INFORMADO INCORRETO"
 */


 /*
 3.
 O programa separa um grupo de numeros  contendo numeros pares e impares em dois 2 grupos distintos:
 1 - grupo de numeros pares
 2 - grupo de numeros ímpares
 
 O programa consegue fazer os seus procedimentos através de um loop, que se repete considerando
  a quantidade de elementos do conjuto
    a - a cada repetição ele verifica se o resto da divisão do número encontrado é 0 ou 1
    b - se for 0, ele adiciona números pares a um novo conjunto de números
    c - se for 1, ele adiciona números ímpares a um novo conjunto de números, que difere do conjunto dos números pares
Ao final o programa imprime no console:
    -  Quantidade total de números 14
    -  6
    -  8
*/

/*
4.
O programa conta encontra a quantidade maxima e minima de elementos dentro do grupo de números.
 - O programa consegue fazer os seus procedimentos através de um loop, que se repete considerando
  a quantidade de elementos do conjuto
  - dentro do laço tem condições que compara entre numero atual de elementos verificados com numérios prédefinidos
  - Na primeira condição adiciona somente números menores  que o seu anterior
  - Na segunda condição adiciona somente números maiores que o seu antecessor
  no final é impresso:
  1
  25
*/


//Exercícios de Lógica de Programação

/*
1.
Através de estruturas de repetição: for, while e for of
*/
function imprimirLista(listaArray){
    for(let i = 0; i < listaArray.length; i++){
        console.log (listaArray[i])
    }
}

/*
2.
a. false
b. true
c. true
d. true
e. true
*/

/*
3.
Não funciona, por que não é possivel saber os números pares com a multiplicação
Não existe uma condição que filtre os números pares
a variável não foi inicializada,  e a incrementação da variável i não existe,por isso teremos um loop infinito
*/
function imprimirQuantidadeDeNumerosPares(quantidadeDeNumerosPares){

    let i = 0
    while(i < quantidadeDeNumerosPares) {
        if(i % 2 === 0){
            console.log(i)
        }else{
            quantidadeDeNumerosPares += 1 
        }
    i++  
    }
}
/*
4.
 */
function verificarTriangulo (a, b, c){
    
    if(a === b && b === c){
        return "Equilátero"
    }else if(a === b || b === c || c === a){
        return "Isósceles"
    }else if (a !== b && b !== c){
        return "Escaleno"
    }
}

//5.

function AcharOmaiorDivisiveisDiferentes( number1, number2){
    //maior numero
    if (number1 > number2){
        console.log("O maior é:", number1)
    }else{
        console.log("O maior é:", number2)
    }
    //divisão
    if (number1 % number2 !== 0){
        console.log (number1, "não é divisível por", number2)
    }else{
        console.log (number1, "é divisível por", number2)
    }

    if (number2 % number1 !== 0){
        console.log (number2, "não é divisível por", number1)
    }else{
        console.log (number2, "é divisível por", number1)
    }

    if (number1 > number2){
        console.log ("A diferença entre eles é", number1 - number2)
    }else{
        console.log ("A diferença entre eles é", number2 - number1)
    }

}

//Exercícios de Funções
//1.
function maiorMenor(array){
    let maiorNumero = 0;
    let segundoMaior = 0
    let menorNumero = 0;
    let segundoMenor = 0;

    //maior numero
    for(let i = 0; i < array.length; i++){
        if(maiorNumero < array[i]){
            maiorNumero = array[i]  
        }
    }
    // segundo maior
    for(let i = 0; i < array.length; i++){     
        if(maiorNumero !== array[i] && segundoMaior < array[i]){
            segundoMaior = array[i]
        }
    }
    //menor numero
    menorNumero = maiorNumero
    segundoMenor = segundoMaior
    for(let i = 0; i < array.length; i++){
        if (menorNumero > array[i]){
            menorNumero = array[i]
        }
    }
    //segundo menor
    for(let i = 0; i < array.length; i++){ 
        if(menorNumero !== array[i] && segundoMenor > array[i]){
            segundoMenor = array[i]
        }
    }
    
    console.log(segundoMaior)
    console.log (segundoMenor)
}
maiorMenor([10, 20, 80, 15, 278, 915, 800 , 1000])



//2.
let imprimir = () =>{
    alert("Hello Future4")
}
imprimir()


//Exercícios de Objetos
//1.
//Objetos são semelhantes aos objetos do mundo real, é possível ter propriedades especificas
//organização especifica com diversos tipos de variáveis em um mesmo objeto.
// Se você quer guardar uma informação que necessite de caracteristicas especificas,exmemplo
// cadastro de pessoas, usar o conceito de objeto é mais recomendável, pois podemos guardar o nome, idade
// genero tudo em um só lugar. Além disso é possível definir funções e criar métodos.
//
//Diferente do objeto, o array se organiza de forma ordenada com indexação e isso nos permite a utilizar funções onde necessita e facilita o trabalho
//de verificação. Um bom exemplo de uso seria listas.

//2.
function criaRetangulo (lado1, lado2){
    let objeto  = {
        largura: lado1,
        altura: lado2,
        parimetro: 2 *(lado1 + lado2),
        area: lado1 * lado1
    }
    return objeto
}

//3.
let filmeFavorito = {
    titulo: "A Origem",
    ano: "2006",
    diretor: "bill",
    atores: ["leonardo", " Leandro", " Lais"]
}
console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores}`)

//4.

const pessoa = {
    nome: "indio",
    idade: "32",
    email: "bboyindio@gmail.com",
    endereço: "rua ladeira do silva"
}
function anonimizarPessoa (pessoa){
    let copiaPessoa = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return copiaPessoa
}


//Exercícios de Funções de array

const pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
//1a.
const soAdultos = pessoas.filter((pessoas) => {
        return pessoas.idade >= 20
})

//1b.
const soCriancas = pessoas.filter((pessoas) => {
    return pessoas.idade < 20
})

//2a.
const array = [1, 2, 3, 4, 5, 6]

const multiplicar = array.map((array) => {
   return array * 2
})

//2c.
const multiplicar2 = array.map((array) => {
    return String (array * 3)
 })

 //3.

 const pessoasMontanha = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]
//3a
const permitirPessoas = pessoasMontanha.filter((pessoasMontanha) => {
   return pessoasMontanha.altura >= 1.5 && pessoasMontanha.idade > 14 &&  pessoasMontanha.idade < 60
})

//3b
const pessoasRestringidas = pessoasMontanha.filter((pessoasMontanha) => {
    return !(pessoasMontanha.altura >= 1.5 && pessoasMontanha.idade > 14 &&  pessoasMontanha.idade < 60)
 })

4//
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const consultasCanceladas = consultas.map((consultas) => {
    let saudar
    let mensagemLembrar

    if (consultas.genero === "masculino"){
        saudar = "Sr."
        mensagemLembrar = "lembrá-lo "
        mensagemLembrar = "lembrá-la"
    }else{
        saudar = "Sra."
    }
    if (consultas.cancelada){
      return  `Olá, ${ saudar } ${ consultas.nome  }. Estamos enviando esta mensagem para
        ${ mensagemLembrar} da sua consulta no dia ${ consultas.dataDaConsulta}. Por favor, acuse
        o recebimento deste e-mail.`
    }else if (!consultas.cancelada){
       return `Olá, ${ saudar } ${ consultas.nome  }. Infelizmente, sua consulta marcada
        para o dia ${ consultas.dataDaConsulta } foi cancelada. Se quiser, pode entrar em 
        contato conosco para remarcá-la`
    }
})
