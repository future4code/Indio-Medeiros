import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	
	state = {
		valueComentario:''
	}
	
	onChangeComentario = (event) => {
		
		this.setState({
			valueComentario: event.target.value
			
		})
	}
	
	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.valueComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
			
		</div>
	}
}
