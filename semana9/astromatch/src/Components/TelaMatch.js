import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Div = styled.div ` 
    width:360px;
    display:flex;
    justify-content: start;
    margin: 1px auto;
    align-items: center;
`
const Img = styled.img ` 
    width: 40px;
    border-radius: 70px;
    height:40px;
`
const P = styled.p ` 
    color: white;
    margin-left: 10px;
`

export default function TelaMatch() {

    const [listaDeMatch, setListaDeMatch] = useState ([{}]) 

    const pegarListaDeMatch = () => {

        //Get Matches
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches`)
        .then((response) => {
          
            setListaDeMatch(response.data.matches)
           
        })
        .catch((erro) => {
         
        })
    }

    useEffect (() => {
        //pega todos os matchs ao renderizar
        pegarListaDeMatch()
    }, [])
    
    return (<div>
        {listaDeMatch.map((pessoa) => {
            return (
            <Div>
                <Img src={pessoa.photo}/>
                <P>{pessoa.name}</P>
            </Div>
            )
        })}
        
       
    </div>
    )
}