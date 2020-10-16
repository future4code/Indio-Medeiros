import React, {Component} from 'react'
import './SecaoComentario.css'
import iconeFacebook from '../../img/facebook.svg'

export class SecaoCompartilhar extends Component {
	
	render() {
		return <div className={'comment-container'}>
			<img alt="imagem" src={iconeFacebook} onClick={this.props.onClickIcone}/>
            <img alt="imagem" src={iconeFacebook} onClick={this.props.onClickIcone}/>
            <img alt="imagem" src={iconeFacebook} onClick={this.props.onClickIcone}/>
            <p>{this.props.texto}</p>
      
		</div>
	}
}
