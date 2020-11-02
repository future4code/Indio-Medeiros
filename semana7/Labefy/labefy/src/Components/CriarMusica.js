import React from "react"
import styled from "styled-components"


const Button = styled.button `
    display:block;
    margin: auto;
    margin-top: 10px;
    font-size: 2em;
    width: 50px;
    height: 50px;
    border-radius: 30px;
    border: 1px solid gray;
    background-color: #2c2c2c;
    color: white;
    margin-bottom: 100px;
    :hover{
        color: orange;
        border-color: orange;
    }
    :focus {
        outline:none;
    }
`


function CriarMusica (props) {
    return (<div>
        <p>Nome da música</p>
        <input type="text" onChange={props.nomeMusica}/>
        <p>Nome do artista</p>
        <input type="text" onChange={props.nomeArtista}/>
        <p>link</p>
        <input type="text" onChange={props.url}/>
        <Button id={props.id} onClick={props.onclickCriarMusica}>+</Button>
    </div>

    )
}
export default CriarMusica