import React, {useState} from 'react'
import './App.css';
import styled from 'styled-components'
import CardMatch from './Components/CardMatch';
import TelaMatch from './Components/TelaMatch';
import iconeMudarTela from './assents/icone-mudar-tela.svg'


const Div = styled.div `
  width: 100vw;
  height: 100vh;
  background: #F13939;
  margin: auto;
  text-align:center;
`
const DivTitulo = styled.div `

  display:flex;
  height:50px;
  color:black;
  background-color:white;
  border: 1px solid #F13939;
  justify-content: center;
`
const H1 = styled.h1 `
  display:inline-block;
  color:black;
  font-size: 1.2em;
 
`
const Bold = styled(H1) `
  color:#F13939;
`
const Logo = styled.img `
  width: 10px;
`
const Input = styled.input ` 
   width: 30px;
   margin-left:200px;
   outline: none;
   :hover{
        -webkit-transform: scale(1);
        transform: scale(1.3);
    }
`
function App() {

  const [telaDeMatch, setTelaMatch] = useState(false)

  return (
    <Div>
      <DivTitulo>
        <H1>Astro</H1>
        <Bold>match</Bold>
        <Logo src={iconeMudarTela} />
        <Input type="image" src={iconeMudarTela} onClick={() => setTelaMatch(!telaDeMatch)} />
      </DivTitulo>
      {/* condição para mudar de tela */}
      {telaDeMatch ? <TelaMatch/> : <CardMatch/>}
      
    </Div>
  );
}

export default App;
