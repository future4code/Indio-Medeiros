import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import CardMatch from './Components/CardMatch';
import coracaoInicio from './assents/coracao-telainicial.svg'

const Div = styled.div `
  width: 360px;
  height: 100vh;
  background: #F13939;
  border-radius: 30px;
  margin: auto;
`
const DivTitulo = styled.div `
  display:flex;
  height:50px;
  color:black;
  background-color:white;
  border: 1px solid #F13939;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
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
const Img = styled.img ` 
  width:100px;
  margin-top:200px;
  animation: fill 1s linear infinite;
	
			@keyframes fill {
        10% {
          width: 30%;
        }

        50% {
          width:40%;
        }

        100% {
          width: 20%;
        }
			}
`
function App() {

  return (
    <Div className="App">
      <DivTitulo>
        <H1>Astro</H1>
        <Bold>match</Bold>
      </DivTitulo>
      <CardMatch/>
      {/* <Img src={coracaoInicio}/> */}
     
    </Div>
  );
}

export default App;
