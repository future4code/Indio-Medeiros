import React from "react"
import CriarPlaylist from "./Components/CriarPlaylist"
import axios from "axios"
import CriarMusica from "./Components/CriarMusica"
import styled from 'styled-components'
import EstiloGeral from './Components/EstiloGeral'
import ReactPlayer from 'react-player'
import DetalharMusica from './Components/DetalharMusica'


const Button = styled.button `
  display:block;
  font-size: 2em;
  height: 50px;
  border: none;
  background-color: #2c2c2c;
  color: gray;
  :focus, :hover{
    color: white;
    outline: none;
  }   
`
const ButtonMusica = styled(Button) `
  font-size:1.2em;
`
const ButtonDel = styled.button `
  display: inline-block;
  font-size: 1.0em;
  height: 50px;
  border: none;
  background-color: #2c2c2c;
  color: tomato;
  :focus, :hover{
    color: gray;
    outline: none;
  }  
`
const ButtonCriar = styled(ButtonDel) `
  color: green;
  :focus, :hover{
          color: gray;
          outline: none;
        } 
`
const Div = styled.div `
  width: 33.33%;
  border: 3px solid #3c3c3c;
  border-left: none;
`
const Coluna = styled.div `
  display: flex;
`

class App extends React.Component {

  state = {
    limparInput: '',
    playlists: [],
    nomePlayList: "",
    novaLista: [],
    deletarPlaylist: "",
    nomeMusica:"",
    nomeArtista:"",
    url: "",
    ListaDeMusicas: [],
    playlistSelecionada: [],
    idPlaylistSelecionada: [],
    musicaTocar:"https://soundcloud.com/dirtyhabits-2/ace",
    opcaoDelete: false,
    opcaoCriar: false,
    nomeMusicaParamostrar: "",
    nomeArtistaParamostrar: "",
    detalhesDaMusica: false,
  }

  componentDidMount(){
    this.pegarListaDeMusica()
  }
 
  
//funções de criação
  criarListaMusica = () => {
    const body = {
      name: this.state.nomePlayList
    }
    axios.post( "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",body, {
      headers: {
        Authorization: "indio-medeiros-dumont"
      }
    }).then((response) => {
      //chamada da função
      this.pegarListaDeMusica()
      this.setState({
        limparInput: ""
      })
    }).catch((error) => {
     
    })
  }

  criarMusicaNaListaDeMusica = (event) => {

    const body = {
      name: this.state.nomeMusica,
      artist: this.state.nomeArtista,
      url: this.state.url
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${event.target.id}/tracks`, body, {
      headers: {
        Authorization: "indio-medeiros-dumont"
      }
    }).then((response)=>{
        
        this.setState({
          opcaoCriar: !this.state.opcaoCriar,
        })
    
    }).catch((error)=> {
   
    })
    alert("Click na playlist novamente para atualizar a lista")
  }

//funções de pegar playlist
  pegarListaDeMusica = () => {

    axios.get( "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
      headers: {
        Authorization: "indio-medeiros-dumont"
      }
    }).then((response) => {
     //chamada da função
      this.vizualizarPlaylist (response.data.result.list)
      this.setState({
        playlists:response.data.result.list
      })

    }).catch((error) => {
     
    })
  }

  
//funçoes de vizualização
  vizualizarPlaylist = (lista) => {
    let novaLista2 = lista.map((nome) => {
      return (
        <Button id={nome.id} value = {nome.name} onClick={this.vizualizarDetalhesDaPlayList}>{nome.name}</Button>
      )
    })
    this.setState ({
      novaLista: novaLista2,
    })
  }

  vizualizarDetalhesDaPlayList = (event) => {
   
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${event.target.id}/tracks`,{
      headers: {
        Authorization: "indio-medeiros-dumont"
      }
    }).then((response) =>{

      this.mostrarMusicasDaPlaylist(response.data.result.tracks)
      this.setState ({
        playlistSelecionada: event.target.value,
        idPlaylistSelecionada: event.target.id,
        ListaDeMusicas: response.data.result.tracks,
        opcaoDelete: true
      })
    }).catch ((error) => {

    })
  }

  mostrarMusicasDaPlaylist = (listaMusicaDaPlaylist) => {
    let novaListaMusica = listaMusicaDaPlaylist.map((musica) => {
      return (
        <ButtonMusica  id={musica.name}  value={musica.url} name={musica.artist} onClick={this.tocarMusica}>{musica.name}</ButtonMusica>
      )
    })
    this.setState ({
      listaMusicaDaPlaylist: novaListaMusica
    })
  }

  tocarMusica = (event) => {
    this.setState ({
      musicaTocar: event.target.value,
      nomeMusicaParamostrar: event.target.id,
      nomeArtistaParamostrar: event.target.name,
      detalhesDaMusica: true
    })
  }


//funções de deletar
  deletarPlaylist = (event) => {

    axios.delete( `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${event.target.id}`, {
      headers: {
        Authorization: "indio-medeiros-dumont"
      }
    }).then((response) => {
       //chamada da função
       this.pegarListaDeMusica()
       
       this.setState ({
         playlistSelecionada: [],
         opcaoDelete: false,
         detalhesDaMusica: false,
         novaLista: [],
       })
    }).catch((error) => {

    })
  }

  opcaoCriarMusica = () => {
    this.setState ({opcaoCriar: true })
  }
  
 
  render () {

    return ( <div>
      <EstiloGeral/>
   
        <CriarPlaylist
          onChangeInput = { (event) => this.setState({nomePlayList: event.target.value, limparInput: event.target.value})}
          criarlist = {this.criarListaMusica}
          texto =  {this.state.limparInput}
    
        />

        <Coluna>   
          <Div>
            <h2>Sua biblioteca</h2>
            {this.state.novaLista}
          </Div>
          <ReactPlayer
            url={ this.state.musicaTocar}
            controls
            playbackRate = {1}
            width = "80%"
            height = "50vh"
          />

        <Div>
          
          <h2>Lista de musicas/videos</h2>
          <h3>{this.state.playlistSelecionada}</h3>     
          
          {this.state.opcaoDelete ? this.state.listaMusicaDaPlaylist: ""}
          {this.state.opcaoDelete ? 
          <ButtonDel id={this.state.idPlaylistSelecionada} onClick={this.deletarPlaylist}>Deletar Playlist</ButtonDel>
          : " "}
          {this.state.opcaoDelete ? 
          <ButtonCriar id={this.state.idPlaylistSelecionada}  onClick={this.opcaoCriarMusica}>Criar Musica</ButtonCriar>
          : " "}
        {this.state.opcaoCriar? 
          <CriarMusica
            nomeMusica = {(event) => this.setState ({nomeMusica: event.target.value})}
            nomeArtista = {(event) => this.setState ({nomeArtista: event.target.value})}
            url = {(event => this.setState ({url: event.target.value}))}
            onclickCriarMusica = {this.criarMusicaNaListaDeMusica}
            id= {this.state.idPlaylistSelecionada}
          /> 
          : ""
        }
  
      </Div>
        
    </Coluna>

    {this.state.detalhesDaMusica?
      <DetalharMusica
        nomeDaMusica = {this.state.nomeMusicaParamostrar}
        nomeAtista = {this.state.nomeArtistaParamostrar}
      />
      : " "
    }
     
  </div>
  );
  }
}

export default App;
