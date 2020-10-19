import React from 'react'
import styled from 'styled-components'
export function Etapa3 (){
    const  Estipzacaocomponente = styled.div`
    text-align: center;
    line-height: 2vh;
    `
    return <Estipzacaocomponente>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <ol>
                <p>7. Por que você não terminou um curso de graduação?</p>
                <input/>
                <p>8. Você fez algum curso complementar?</p>
                <input/>
            </ol>
            <select>
                <option>Nenhum</option>
                <option>Curso técnico</option>
                <option>Curso de inglês</option>
            </select>
    </Estipzacaocomponente>

}
export default Etapa3
