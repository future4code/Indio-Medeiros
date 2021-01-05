//a) resposta: é emitido um erro de sintax
// const minhaString: string = 1

//b) colocando a "|" union para ter duas possibilidades de tipos
const meuNumero: number | string = 1

//c)
const pessoa: {nome: string, idade: number, corFavorita: string} = {
    nome: "indio",
    idade: 32,
    corFavorita: "preto"
}

//d) e e)
enum coresArcoiris {
    LARANJA =  "Laranja",
    AMARELO =  "Amarelo",
    VERDE =    "Verde",
    AZUL =    "Azul",
    ANIL =     "Anil",
    VIOLETA =  "Violeta"
}
type person = {nome: string, idade: number, corFavorita: coresArcoiris} 

const lais: person = {
    nome: "Laís",
    idade: 33,
    corFavorita: coresArcoiris.AMARELO
}
const leandro: person = {
    nome: "Leandro",
    idade: 39,
    corFavorita: coresArcoiris.AZUL
}
const fabgirl: person = {
    nome: "Fabiana",
    idade: 37,
    corFavorita: coresArcoiris.LARANJA
}


