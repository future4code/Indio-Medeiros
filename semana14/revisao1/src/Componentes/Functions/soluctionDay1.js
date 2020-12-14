


//exercicios de Funções

//Exercício 1
export const revertText = (text) => {
    //reverte o texto
    return text.split("").reverse().join("")
}

//Exercício 2
export const checkPalindromo = (text) => {
    //deixa todo texto minusculo
    text = text.toLowerCase()
    //separa, tira os espaços e junta novamente
    const textWithoutSpace = text.split("").filter((letter) => {return letter !== " "}).join("") 
    //separa, tira os espaços, inverte e junta novamente
    const textWithoutSpaceRevert = text.split("").filter((letter) => {return letter !== " "}).reverse().join("")
    //compara os dois e retorna o resultado
    if(textWithoutSpace === textWithoutSpaceRevert){
        return "È um Palindromo"
    }else{
        return "Não é um Palindromo"
    }
}

export const combinationString = (string) => {
    
    let newArrayString = []
    for(let i = 0; i <= string.length; i++){
        if (i === 0){
            newArrayString.push(string[i] + ",")
        } else if (i < string.length - 1 ) {
            newArrayString.push(string[i-1] + string[i] + ",")
        }else if (i === string.length){
            newArrayString.push(string)
        }
    }
    
    
    return newArrayString.join("")

}
//Exercício 3

//Exercício 4
//Exercício 5
//Exercício 6
//Exercício 7
//Exercício 8
//Exercício 9
//Exercício 10

//exercicios de Laços

//Exercício 1
//Exercício 2
//Exercício 3
//Exercício 4
//Exercício 5
//Exercício 6
//Exercício 7