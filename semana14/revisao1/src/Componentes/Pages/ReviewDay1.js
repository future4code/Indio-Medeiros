import React, { useState } from "react";
import {revertText,largestWord,sortIncreasingNumbers,  getRepeatNumberCaracters, largestNumber, extractUniqueCharacters,  checkSecondLargestMinor, countVowels, checkPalindromo, checkBiggerWord,  addCapitalLetter, combinationString, sortAlphabetic} from '../Functions/soluctionDay1'

export default function ReviewDay1() {
    const [strings, setStrings] = useState({})
    
    const handleOnChange = (event) => {
         const {name, value} = event.target
        setStrings({...strings, [name]: value})
    }
    
  

  return (
    <div>
        <h3>Reverter texto</h3>
        <input name="revertText" value={strings.revertText} onChange={(handleOnChange)}/>
        <p> Resultado: {strings.revertText && revertText(strings.revertText)}</p> 
        
        <h3>Verificação de Palindromo</h3>
        <input name="checkPalindromo" value={strings.checkPalindromo} onChange={(handleOnChange)}/>
        <p> Resultado: {strings.checkPalindromo && checkPalindromo(strings.checkPalindromo)}</p>
         
        <h3>Combinações de palavra</h3>
        <input name="combinationString" value={strings.combinationString} onChange={(handleOnChange)}/>
        <p> Resultado: {strings.combinationString && combinationString(strings.combinationString)}</p>

        <h3>Ordenação alfabetica de palavra</h3>
        <input name="sortAlphabetic" value={strings.sortAlphabetic} onChange={(handleOnChange)}/>
        <p> Resultado: {strings.sortAlphabetic && sortAlphabetic(strings.sortAlphabetic)}</p>

        <h3>Adicionar letra maiúscula nas iniciais das palavras</h3>
        <input name="addCapitalLetter" value={strings.addCapitalLetter} onChange={(handleOnChange)}/>
        <p> Resultado: {strings.addCapitalLetter && addCapitalLetter(strings.addCapitalLetter)}</p>

        <h3>Mostra maior palavra</h3>
        <input name="checkBiggerWord" value={strings.checkBiggerWord} onChange={(handleOnChange)}/>
        <p> Resultado: {strings.checkBiggerWord && checkBiggerWord(strings.checkBiggerWord)}</p>

        <h3>Contar vogais</h3>
        <input name="countVowels" value={strings.countVowels} onChange={(handleOnChange)}/>
        <p> Resultado: {strings.countVowels && countVowels(strings.countVowels)} {strings.countVowels && "vogais"}</p>

        <h3>Mostrar o segundo menor e segundo maior número</h3>
        <input type="number" name="checkSecondLargestMinor" value={strings.checkSecondLargestMinor} onChange={(handleOnChange)}/>
        <p> Resultado: {strings.checkSecondLargestMinor && checkSecondLargestMinor(strings.checkSecondLargestMinor)} </p>

        <h3>Extrair caracteres únicos de uma String</h3>
        <input  name="extractUniqueCharacters" value={strings.extractUniqueCharacters } onChange={(handleOnChange)}/>
        <p> Resultado: {strings.extractUniqueCharacters  && extractUniqueCharacters(strings.extractUniqueCharacters )} </p>

        <h3>Pegar o numero de vezes que cada letra aparece numa string.</h3>
        <input  name="getRepeatNumberCaracters" value={strings.getRepeatNumberCaracters } onChange={(handleOnChange)}/>
        <p> Resultado: {strings.getRepeatNumberCaracters  && getRepeatNumberCaracters(strings.getRepeatNumberCaracters)} </p>

        <h1>LAÇOS</h1>
        <h3>Pegar o maior numero</h3>
        <input  name="largestNumber" value={strings.largestNumber } onChange={(handleOnChange)}/>
        <p> Resultado: {strings.largestNumber && largestNumber(strings.largestNumber)} </p>

        <h3>Pegar a maior palavra</h3>
        <input name="largestWord" value={strings.largestWord } onChange={(handleOnChange)}/>
        <p> Resultado: {strings.largestWord && largestWord(strings.largestWord)} </p>

        <h3>Ordenação crescente de numeros (até 3 numeros)</h3>
        <input  maxLength="3" name="sortIncreasingNumbers" value={strings.largestWord } onChange={(handleOnChange)}/>
        <p> Resultado: {strings.sortIncreasingNumbers && sortIncreasingNumbers(strings.sortIncreasingNumbers)} </p>

    </div>

  )
}
