import React from 'react';
import './CardGrande.css'

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <h1>{ props.nome }</h1>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardGrande;