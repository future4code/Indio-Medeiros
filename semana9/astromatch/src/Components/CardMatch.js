import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import coracaoBranco from '../assents/botao-de-coracao-branco.svg'
import passar from '../assents/passar.svg'
const Div = styled.div ` 
    display:flex;
    align-items:center;
    flex-direction:column;

`
const DivBotoes = styled.div ` 
    display:flex;
    
   
`

const Img = styled.img ` 
    width: 358px;
    height: 350px;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    position: absolute;
`

const H1 = styled.h1 `
    width: 300px;
    font-size: 1.8em;
    color: white;
    position:relative;
    margin-top: 310px;
    background-color:#F13939;
    padding:5px;
    border-radius:10px;
`
const P = styled.p `
    color: white;
    position:relative;
    margin-top: -10px;
`
const ImgMatch = styled.input `
    width:50px;
    margin-left:60px;
    outline: none;
    border:none;
    :hover{
        -webkit-transform: scale(1);
        transform: scale(1.1);
    }
    
    
`
const ImgPassar = styled.input `
    width:50px;
    margin-right:60px;
    outline: none;
    border:none;
    :hover{
        -webkit-transform: scale(1);
        transform: scale(1.1);
    }
    
    
`

export default function CardMatch () {
    const [perfil, setPerfil] = useState({})
    const [perfilSelecionado , setPerfilselecionado] = useState({})

    const pegarPerfil = () => {
        //Get Profile To Choose
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`)
        .then((response) => {
            console.log("pegou perfil",response)
            setPerfil(response.data.profile)
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    useEffect (() => {
        pegarPerfil()
    },[])

    const darMatch = () => {
        console.log("match")
        const body = {
            id: perfil.id,
            choice: true
        }
        //Choose Person
        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/`, body)
        .then((response) => {
            console.log(response)
            setPerfilselecionado(response)
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    const trocarPerfil = () => {
        console.log("trocou")
        
    }
    
    return(<Div>
        {console.log(perfil)}
        <Img src={perfil.photo}/>
    <H1>{perfil.name}, {perfil.age}</H1>
        <P>{perfil.bio}</P>
        <DivBotoes>
         <ImgPassar type="image" onClick={trocarPerfil} src={passar}/>
         <ImgMatch  type="image" onClick={darMatch} src={coracaoBranco}/>
        </DivBotoes>
    </Div>

    )
}