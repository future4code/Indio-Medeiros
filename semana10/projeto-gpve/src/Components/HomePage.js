import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Button = styled.button `
    font-size: 1.5em;
    padding:10px;
    margin-right:30px;
    background-color:white;
    border-radius: 5px;
    :hover{
        cursor: pointer;
    }
`
const Body = styled.div `
    display: flex;
    justify-content:center;
    align-items: center;
    height:85vh;
    width:100vw;
    
    
`

export default function HomePage(){
    const history = useHistory()

    const goToPage = (path) => {
        history.push(path)
    }

    return(
        <Body>
           <Button onClick={() => {goToPage("/trips/list")}}>lista de Viagens</Button>
        </Body>
    )
}