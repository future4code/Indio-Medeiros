import React from "react"
import styled, { createGlobalStyle } from 'styled-components'

const Div = styled.div `
    width: 100%;

`
const H1 = styled.h1 `
    margin-top: -30px;
    font-size: 3em;
    color: orange;
`
const Input = styled.input `

    font-size: 1.5em;
    color: white;
    width: 50%;
    grid-column: 1/2;
    height: 30px;
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: #2c2c2c;   
    :focus { 
    outline: none;
        background-color: #2c2c2c;
        ::placeholder{
            color:white;
            }
        }  

`
const Button = styled.button `
        
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
const P = styled.p `
    color: orange;
`

function CriarPlaylist (props){

    return ( <Div>
        
        <P>Labefy</P>
        <div>
            <H1>Playlists</H1>
            <Input type="text" onChange={props.onChangeInput} placeholder="Nova PlayList" value={props.texto}/>
            <Button onClick={props.criarlist}>+</Button>
        </div>
        
    </Div>

    );
}
export default CriarPlaylist