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
    width:120px;
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
    const token = localStorage.getItem("token")

    const goToPage = (path) => {
        history.push(path)
    }

    

    return(
        <Header>
            <ButtonLabex onClick={() => {goToPage("/")}}> LABEX </ButtonLabex>
            <div>
                {token ? <Button onClick={() => {goToPage("/trips/create")}}>Criar viagem</Button> : ""}
                {token? <Button onClick={() => {goToPage("/trips/details")}}>Detalhes viagem</Button>: ""}
            </div>
            <Button onClick={() => {goToPage("/application-form")}}>Formulário</Button> 
            <Button onClick={() => {goToPage("/login")}}>login</Button>
        </Header>
    )
}