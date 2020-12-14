import React, { useState } from "react";
import {revertText, checkPalindromo, combinationString} from '../Functions/soluctionDay1'

export default function ReviewDay1() {
    const [strings, setStrings] = useState({})
    const [functionResults, setFunctionResults] = useState({})
    
    const handleOnChange = (event) => {
         const {name, value} = event.target
        setStrings({...strings, [name]: value})
    }
    
    const handleOnClick = (event) => {
        const {name, value} = event.target
        setFunctionResults ({...functionResults, [name]: value})
        setStrings({...strings, [name]: ""})
    }

  return (
    <div>
        <h3>Reverter texto</h3>
        <input name="revertText" value={strings.revertText} onChange={(handleOnChange)}/>
        <button name="revertText" onClick={handleOnClick} value={strings.revertText && revertText(strings.revertText)} > Reverter</button> 
        <p> Resultado: {functionResults.revertText}</p> 
        
        <h3>Verificação de Palindromo</h3>
        <input name="checkPalindromo" value={strings.checkPalindromo} onChange={(handleOnChange)}/>
        <button name="checkPalindromo" onClick={handleOnClick} value={strings.checkPalindromo && checkPalindromo(strings.checkPalindromo)} > Reverter</button> 
        <p> Resultado: {functionResults.checkPalindromo}</p>
         
        <h3>Combinações de palavra</h3>
        <input name="combinationString" value={strings.combinationString} onChange={(handleOnChange)}/>
        <button name="combinationString" onClick={handleOnClick} value={strings.combinationString && combinationString(strings.combinationString)} > Reverter</button> 
        <p> Resultado: {functionResults.combinationString}</p>

    </div>

  )
}
