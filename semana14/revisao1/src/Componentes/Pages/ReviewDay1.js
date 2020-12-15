import React, { useState } from "react";
import {revertText, checkSecondLargestMinor, countVowels, checkPalindromo, checkBiggerWord,  addCapitalLetter, combinationString, sortAlphabetic} from '../Functions/soluctionDay1'

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
        <p> Resultado: {strings.countVowels && countVowels(strings.countVowels)} vogais</p>

        <h3>Mostrar o segundo menor e segundo maior número</h3>
        <input type="number" name="checkSecondLargestMinor" value={strings.checkSecondLargestMinor} onChange={(handleOnChange)}/>
        <p> Resultado: {strings.checkSecondLargestMinor && checkSecondLargestMinor(strings.checkSecondLargestMinor)} </p>

    </div>

  )
}
