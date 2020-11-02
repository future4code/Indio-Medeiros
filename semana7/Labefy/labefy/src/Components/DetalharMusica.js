import React from 'react'
import styled from 'styled-components'

const P = styled.p `
    color: gray;
    display:flex;
    justify-content: center;
`

const P2 = styled(P)  `
    color: white;
`
function DetalharMusica (props) {
    return(<div>
        <P>Nome da música</P>
        <P2>{props.nomeDaMusica}</P2>
        <P>Nome do artista</P>
        <P2>{props.nomeAtista}</P2>
    </div>

    )

}
export default DetalharMusica