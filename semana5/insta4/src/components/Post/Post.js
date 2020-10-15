import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeMarcadorBranco from '../../img/saveBranco.svg'
import iconeMarcadorPreto from '../../img/savePreto.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeCompartilhar from '../../img/compartilhar.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoComentario/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcador: false,
    compartilhar: false,
    mensagem: false
  }

  onClickCurtida = () => {
    if(!this.state.curtido && this.state.numeroCurtidas === 0){
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas : this.state.numeroCurtidas +1
    })
    }else if(this.state.curtido  && this.state.numeroCurtidas === 1 ){
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas : this.state.numeroCurtidas -1
     })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }
  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }
  compartilharNaRede = () => {
    console.log ("Post compartilhado no Facebook")
    this.setState({
      compartilhar: !this.state.mensagem
    })
  }
  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }
  onClickMarcador = () =>{
    this.setState({
      marcador: !this.state.marcador
    })
  }
  render() {
    let iconeCurtida
    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario
    let componenteCompartilhar
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }
    if(this.state.compartilhar) {
      componenteCompartilhar = <SecaoCompartilhar  onClickIcone={this.compartilharNaRede}/>
    }
    if (this.state.mensagem) {
      componenteCompartilhar = <SecaoCompartilhar  texto = "Post compartilhado no Twitter com a mensagem: Olha essa foto linda!" onClickIcone={this.compartilharNaRede}/>
    }

    let iconeMarcador
    
    if (this.state.marcador){
      iconeMarcador = iconeMarcadorPreto
    }else{
      iconeMarcador = iconeMarcadorBranco
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeMarcador}
          onClickIcone={this.onClickMarcador}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
          valorContador={this.state.numeroComentarios}
        />

      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  }
}

export default Post