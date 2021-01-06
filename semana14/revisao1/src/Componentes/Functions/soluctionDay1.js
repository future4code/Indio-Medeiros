//exercicios de Funções

//Exercício 1
export const revertText = (text) => {
  //reverte o texto
  return text.split("").reverse().join("");
};

//Exercício 2
export const checkPalindromo = (text) => {
  //deixa todo texto minusculo
  text = text.toLowerCase();
  //separa, tira os espaços e junta novamente
  const textWithoutSpace = text
    .split("")
    .filter((letter) => {
      return letter !== " ";
    })
    .join("");
  //separa, tira os espaços, inverte e junta novamente
  const textWithoutSpaceRevert = text
    .split("")
    .filter((letter) => {
      return letter !== " ";
    })
    .reverse()
    .join("");
  //compara os dois e retorna o resultado
  if (textWithoutSpace === textWithoutSpaceRevert) {
    return "È um Palindromo";
  } else {
    return "Não é um Palindromo";
  }
};

//Exercício 3
export const combinationString = (string) => {
  //array de interação
  let newArrayString = [];
  for (let i = 0; i < string.length; i++) {
    //dois contadores (i e j)somando a primeira palavra "i" com as próximas "j"
    newArrayString.push(string[i] + ",");
    for (let j = i; j < string.length; j++) {
      if (string[i] !== string[j]) {
        newArrayString.push(string[i] + string[j] + ",");
      }
      if (j === string.length - 1 && i === 0) {
        newArrayString.push(string + ",");
      }
    }
  }

  return newArrayString.join("");
};

//Exercício 4
export const sortAlphabetic = (string) => {
  //dividir string, ordenar e considerar os não-ASCII com localeCoompare e juntar tudo
  return string
    .split("")
    .sort(function (a, b) {
      return a.localeCompare(b);
    })
    .join("");
};

//Exercício 5
export const addCapitalLetter = (string) => {
  let formString = "";
  const arrayNewString = [];
  const newString = string.toLowerCase().split(" ");
  for (let i = 0; i < newString.length; i++) {
    formString = newString[i].split("");
    if (formString[0]) {
      formString.splice(0, 1, formString[0].toUpperCase());
      arrayNewString.push(formString.join(""));
    }
  }
  return arrayNewString.join(" ");
};

//Exercício 6
export const checkBiggerWord = (string) => {
  let bigString = "";
  string.split(" ").forEach((word) => {
    // retira o espaço do word inicio e final e compara o tamanho
    if (word.trim().length > bigString.length) {
      bigString = word.trim();
    }
  });
  return bigString;
};

//Exercício 7
export const countVowels = (string) => {
  //mapeando vogais
  const vowels = "áàãâäaéèêëeíìîïióòõôöúùûü";
  //contador
  let count = 0;
  string
    .toLowerCase()
    .split("")
    .forEach((word) => {
      //se não houver vogal ele vai retornar -1
      if (vowels.split("").indexOf(word) !== -1) {
        count++;
      }
    });
  return count;
};
//Exercício 8
export const checkSecondLargestMinor = (numbers) => {
  let arrayNumbers = [];
  arrayNumbers.push(numbers);
  let newArrayNumbers = numbers !== " " && arrayNumbers[0].split("").sort();
  return newArrayNumbers[1] + "," + newArrayNumbers[newArrayNumbers.length - 2];
};

//Exercício 9
export const extractUniqueCharacters = (string) => {
  //tranformando em array
  string = string.split("");
  //novoArray com os caracteres únicos
  let stringFiltering = [];

  for (let i = 0; i < string.length; i++) {
    //contador de caracteres repetidos
    let count = 0;

    for (let j = 0; j < string.length; j++) {
      //se o caractere for igual a algum dos itens do array
      //o count vai registrar +1
      if (string[i] === string[j]) {
        count++;
      }
    }
    if (count === 1) {
      stringFiltering.push(string[i]);
    }
  }

  return stringFiltering;
};
//Exercício 10
export const getRepeatNumberCaracters = (string) => {
  string = string.split("");
  //novoArray com os caracteres únicos
  let stringFiltering = [];

  for (let i = 0; i < string.length; i++) {
    //contador de caracteres repetidos
    let count = 0;

    for (let j = 0; j < string.length; j++) {
      //se o caractere for igual a algum dos itens do array
      //o count vai registrar +1
      if (string[i] === string[j]) {
        count++;
      }
    }
    if (count > 0 && string[i] !== " ") {
      stringFiltering.push(string[i] + count + ", ");
    }
  }
  //remove caracteres repetidos
  stringFiltering = stringFiltering.sort().reduce((init, current) => {
    if (init.length === 0 || init[init.length - 1] !== current) {
      init.push(current);
    }
    return init;
  }, []);

  return stringFiltering;
};
//exercicios de Laços

//Exercício 1
export const largestNumber = (number) => {
  let largestNumber = 0;
  number = number.split(" ");
  for (let i = 0; i < number.length; i++) {
    if (Number(number[i]) > Number(largestNumber)) {
      largestNumber = number[i];
    }
  }
  return largestNumber;
};
//Exercício 2
export const largestWord = (string) => {
  string = string.split(" ");
  let largestWord = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i].length > largestWord.length) {
      largestWord = string[i];
    }
  }
  return largestWord;
};
//Exercício 3 e 4
export const sortIncreasingNumbers = (number) => {
  number = number.split("");
  for (let i = 0; i < number.length - 1; i++) {
    for (let j = 0; j < number.length - i - 1; j++) {
      if (number[j] > number[j + 1]) {
        let auxiliary = number[j];
        number[j] = number[j + 1];
        number[j + 1] = auxiliary;
      }
    }
  }
  return number;
};
//Exercício 5
export const checkParOrDivisibleByThree = (number) => {
  number = Number(number)
  let message = []
  console.log(number)
  for( let i = 0; i <= number; i++){
    if( i%2 === 0){
      message.push(i," é par, ")
    }else if( i%3 === 0) {
      message.push(i," é par e divisivel por 3, " )
    }
  }
  return message
}
//Exercício 6
export const drawPattern = (number) => {
  number = Number(number)
  let arrayDraw = []
  for (let i = 1; i <= number; i++){
    
    for( let j = 0; j < i; j++){
      arrayDraw.push("*")
    }
    
    arrayDraw.push(" ")
  }

  return arrayDraw.join("").split(" ")
}
//Exercício 7
export const noteStudentLabenu = (note) => {

  if(note < 30 ){
      note ="E"
  }else if(note < 40){
      note ="D"
  }else if (note < 60){
      note ="C"
  }else if (note < 80){
      note ="B"
  }else if (note < Infinity){
      note ="A"
  }
  return "nota " + note
}