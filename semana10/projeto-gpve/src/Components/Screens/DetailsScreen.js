import React from 'react'
import styled from 'styled-components'


const Div = styled.div `
    
`


const DivTitle = styled.div `
    display:grid;
    grid-template-columns: 1fr 2fr 0.5fr 0.5fr 0.5fr 0.5fr;
    grid-template-rows: 1fr 4fr;
    box-shadow: 1px 1px 2px gray;
    margin-top: 30px;
    width:1080px;
    margin:auto;
    margin-top: 30px;
`
const H1 = styled.h5 `
    
    color:white;
    background-color: #5C73F2;
    border-bottom: 1px solid black;
    padding: 0px 10px;
    margin: 0;
`
const P = styled.p `
    padding: 0px 10px;
    margin: 0;  
`
const Button = styled.button `
    margin: auto;
    grid-column: 6/6;
    grid-row: 2;
    border: none;
    background-color:tomato;
    color: black;
    border-radius: 5px;
    outline: none;
    color: white;
    :hover{
        cursor: pointer;
        background-color:#5C73F2;
        
    }

`


export default function DetailsScreen (props) {
    return (
        <Div>
            <DivTitle>
                <H1>Nome da viagem</H1>
                <H1>Descrição</H1>
                <H1>Planeta</H1>
                <H1>Data</H1>
                <H1>Duração</H1>
                <H1>inscrição</H1>
           
                <P>{props.name}</P>
                <P>{props.description}</P>
                <P>{props.planet}</P>
                <P>{props.date}</P>
                <P>{props.durationInDays}</P>
                <Button id={props.id} onClick={props.onclick}>Candidatar-se</Button>

            </DivTitle>

        </Div>
    )
}