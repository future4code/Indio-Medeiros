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



