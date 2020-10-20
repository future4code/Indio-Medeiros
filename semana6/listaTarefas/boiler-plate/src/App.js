import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`


const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(), 
        texto: " ",
        completa: false, 
      }],
     
      inputValue: '',
      filtro: "nenhuma",
      limpar: false
    }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify (this.state.tarefas))
  };

  componentDidMount() {
   const atualizarTarefa = localStorage.getItem("tarefas")
   this.setState ({
     tarefa: JSON.parse (atualizarTarefa)
   })
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  criaTarefa = () => {
    this.setState({
      limpar: false
    })
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const copiaDoEstado = [...this.state.tarefas, novaTarefa]
    this.setState ({
      tarefas: copiaDoEstado
    })
  }

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefaId) => {
      if (id === tarefaId.id) {
        const novaTarefa = {...tarefaId, completa: !tarefaId.completa }
        return novaTarefa
      }else {
        return tarefaId
      }
      
    })
    this.setState({
      tarefas: novaListaDeTarefas
    })
  }
  
  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value
    })
  }

  limparTarefa = () =>{
     this.setState({
       limpar: true
     })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={this.limparTarefa}>Limpar tarefas</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return !this.state.limpar ? (<Tarefa completa={tarefa.completa}onClick={() => this.selectTarefa(tarefa.id)}> {tarefa.texto} </Tarefa>) : <div></div>
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
