import logo from './logo.svg';
import './App.css';
import React from "react"
import axios from "axios"

class App extends React.Component {
  state = {
    listaDePokemons: [],
    imagensPokemonSelecionada: ""
  }

  componentDidMount () {
    this.pegarPockemon()
  }
  pegarPockemon = () => {
    let pokemons = "https://pokeapi.co/api/v2/pokemon/?limit=5"
    axios.get(pokemons).then ((response) => {
      this.setState({
        listaDePokemons: response.data.results
      })
    });
    
  }
  selecionarImagemPokemon = (event) => {
    
    const imagensPokemons = `https://pokeapi.co/api/v2/pokemon/${event.target.value}`
    axios.get(imagensPokemons).then ((response) => {
      this.setState({ imagensPokemonSelecionada: response.data.sprites.front_default})
    })
  }
  render(){
    let lista = this.state.listaDePokemons.map((pokemon) => {
    return <option key = {pokemon.name}>{pokemon.name}</option>
    console.log(this.state.listaDePokemons)
  });
    return (<div>
        <select onChange={this.selecionarImagemPokemon}>
          {lista}
        </select>
        <br/>
        <img src = {this.state.imagensPokemonSelecionada}/>
      </div>
    );
  }
}

export default App;
