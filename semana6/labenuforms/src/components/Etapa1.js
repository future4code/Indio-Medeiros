import React from 'react'
import styled from 'styled-components'
export function Etapa1 (){

   const  Estipzacaocomponente = styled.div`
    text-align: center;
    line-height: 2vh;
    `
   
    
    return <Estipzacaocomponente>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <ol>
                <p> 1. Qual o seu nome?</p>
                <input/>
                <p>2. Qual sua idade?</p>
                <input/>
                <p>3. Qual seu email?</p>
                <input/>
                <p>4. Qual a sua escolaridade?</p>
            </ol>

            <select>
        
                <option>Ensino médio incompleto</option>
                <option>Ensino médio completo</option>
                <option>Ensino superior incompleto</option>
                <option>Ensino superior completo</option>
          
            </select>
            
    </Estipzacaocomponente>

}
export default Etapa1
