import React from "react"
import CriarPlaylist from "./Components/CriarPlaylist"
import axios from "axios"

class App extends React.Component {

  state = {
    playlists: [],
    nomePlayList: "",
    novaLista: [],
   
  }

  componentDidMount(){
    
  }
  
  

  criarListaMusica = () => {
    
    const body = {
      name: this.state.nomePlayList
    }
    axios.post( "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",body, {
      headers: {
        Authorization: "indiom-dumont"
      }
    }).then((response) => {
     
    }).catch((error) => {
     
    })
   
  }

  pegarListaDeMusica = () => {
    const body = {
      name: ""
    }
    axios.get( "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
      headers: {
        Authorization: "indiom-dumont"
      }
    }).then((response) => {
      this.vizualizarPlaylist(response.data.result.list)
      this.setState({
        playlists:response.data.result.list
      })
      console.log ("pegando", this.state.playlists)
    }).catch((error) => {
      console.log ("erro", error)
    })
  
  }
  vizualizarPlaylist = (lista) => {
    let novaLista2 = lista.map((nome) => {
      return (
        <li>{nome.name}</li>
      )
    })
    this.setState ({
      novaLista: novaLista2
    })
  }


  render () {
    

    return (
      <div className="App">
        <CriarPlaylist
          onChangeInput = { (event) => this.setState({nomePlayList: event.target.value})}
          criarlist = {this.criarListaMusica}
          verList= {this.pegarListaDeMusica}
        />

        <ol>
         {this.state.novaLista}
        </ol>
        
      </div>
    );
    }
}

export default App;
