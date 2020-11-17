import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header `
    display:flex;
    border: 1px solid black;
    width:100vw;
    height:5vh;
    justify-content: space-between;
    align-items: center;
`
const Button = styled.button `
    height:30px;
    width:90px;
    margin-right:30px;
    margin-left: 30px;
    background-color:white;
    border-radius: 5px;
    :hover{
        cursor: pointer;
    }
`
const ButtonLabex = styled.button `
    margin-left: 30px;
    background-color:white;
    border: none;
    font-size: 1.5em;
    outline:none;
    :hover{
        cursor: pointer;
    }
`
export default function NavBar(){
    const history = useHistory()

    const goToPage = (path) => {
        history.push(path)
    }

    

    return(
        <Header>
            <ButtonLabex onClick={() => {goToPage("/")}}> LABEX </ButtonLabex>
            {/* <button onClick={() => {goToPage("/trips/create")}}>Criar viagem</button>
            <button onClick={() => {goToPage("/trips/details")}}>Detalhes da viagem</button> */}
            {/* <button onClick={() => {goToPage("/application-form")}}>Formulário</button> */}
            <Button onClick={() => {goToPage("/login")}}>login</Button>
        </Header>
    )
}