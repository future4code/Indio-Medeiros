import React from 'react';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'
import styled from 'styled-components'
export class App extends React.Component {
  state = {
    etapa: 1,
    botao: true
  }
  renderizaEtapa = () => {
   
    switch(this.state.etapa){
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4:
        return <Final/>;
    }
  }

 irParaProximaEtapa = () => {
      let contadorEtapas = this.state.etapa + 1
      this.setState({
        etapa: contadorEtapas
      })
      if (contadorEtapas === 4) {
        this.setState({
          botao: false
        })
      }
    } 

    EstilizacaoForm = styled.div`
    text-align: center;
    line-height: 4vh;
    margin-left: 40px;
    `

  render() {
    return (<div>
     
      {this.renderizaEtapa()}
     
      <this.EstilizacaoForm>
        {this.state.botao ? <button onClick = {this.irParaProximaEtapa}>Próxima etapa</button>:"" }
        </this.EstilizacaoForm>
      </div>
    )
  }
}

export default App;
