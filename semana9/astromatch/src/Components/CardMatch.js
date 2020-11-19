import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import coracaoBranco from '../assents/botao-de-coracao-branco.svg'
import passar from '../assents/passar.svg'
import coracaoInicio from '../assents/coracao-telainicial.svg'

const Button = styled.button ` 
    background: none;
    color: white;
    outline:none;
    border-color: white;
    border-radius: 30px;
    font-size: 1.2em;
    font-weight: bold;
    padding: 10px;
    :hover{
        background: white;
        color: #F13939;
    }
`

const Div = styled.div ` 
    display:flex;
    align-items:center;
    flex-direction:column;
`
const DivBotoes = styled.div ` 
    display:flex;
    position:fixed;
    bottom:80px;
`

const Img = styled.img ` 
    width: 358px;
    height: 350px;
    border-radius: 10px;
    margin-top:10px;
    position: absolute;
`

const H1 = styled.h1 `
    width: 300px;
    font-size: 1.6em;
    color: white;
    position:relative;
    margin-top: 320px;
    background-color:#F13939;
    padding:5px;
    border-radius:10px;
`
const P = styled.p `
    color: white;
    position:relative;
    margin-top: -10px;
    width:300px;
`
const ImgMatch = styled.input `
    position: fixed;
    top: 500px;
    width:70px;
    margin-left:80px;
    outline: none;
    border:none;
    :hover{
        -webkit-transform: scale(1);
        transform: scale(1.3);
    }
`
const ImgPassar = styled(ImgMatch) `
    margin-left:-160px;
`
const ImgCoracao = styled.img ` 
  position:fixed;
  width:100px;
  margin-top:120px;
  animation: fill 1s linear infinite;
	
    @keyframes fill {
        10% {
          width: 10%;
        }

        50% {
          width:5%;
        }

        100% {
          width: 10%;
        }
	}
`


export default function CardMatch () {

    const [perfil, setPerfil] = useState({})
    const [perfilSelecionado , setPerfilselecionado] = useState({})
    const [existePerfil, setExistePerfil] = useState(false)

    const pegarPerfil = () => {
        //Get Profile To Choose
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`)
        .then((response) => {
            
            if(response.data.profile === null){
               setExistePerfil(false)
            }else{
                setPerfil(response.data.profile)
                setExistePerfil(true)
            }
        })
        .catch((erro) => {
           
        })
    }

    useEffect (() => {
        //pega todos os perfis
        pegarPerfil()
    },[perfilSelecionado])

    const darMatch = (event) => {

        //variável para definir o match
        let match;
        
        if(event.target.value === "match"){
            match = false
        }else if (event.target.value === "passar"){
            match = true
        }
        
        const body = {
            "id":`${perfil.id}`,
            "choice": match
        }

        //Choose Person
        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person`, body)
        .then((response) => {
            setPerfilselecionado(response)
        })
        .catch((erro) => {
          
        })
    }

    //limpa todos os matchs e reinicia os perfis
    const limparMatchs = () => {
        axios   
        .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear`)
        .then((response) => {
           
            pegarPerfil()
        })
        .catch((error) => {
          
        })
    }
    
    return(<Div>
            
            {/* condição confere se existe perfis. Caso não exista é renderizado o coração pulsando */}
            {existePerfil? <Img src={perfil.photo}/> : <ImgCoracao src={coracaoInicio}/>}
            <H1>{existePerfil? perfil.name + "," : "Os perfis acabaram!"} {existePerfil? perfil.age : ""}</H1>
            <P>{existePerfil? perfil.bio : <Button onClick={limparMatchs} >Reiniciar</Button>}</P>
        
            <DivBotoes>
                <ImgPassar type="image" value="match" onClick={darMatch} src={passar}/>
                <ImgMatch  type="image" value="passar" onClick={darMatch} src={coracaoBranco}/>
            </DivBotoes>
        
    </Div>
    )
}