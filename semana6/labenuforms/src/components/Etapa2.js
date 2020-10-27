import React from 'react'
import styled from 'styled-components'

export function Etapa2 (){
    const  Estipzacaocomponente = styled.div`
    text-align: center;
    line-height: 2vh;
    `
    return <Estipzacaocomponente>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <ol>
               <p>5. Qual curso?</p>
                <input/>
               <p>6. Qual a unidade de ensino?</p>
                <input/>
            </ol>
    </Estipzacaocomponente>
    
}
export default Etapa2
