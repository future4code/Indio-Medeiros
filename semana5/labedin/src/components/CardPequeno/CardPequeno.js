import React from 'react';
import './CardPequeno.css';

function CardPequeno (props) {
    return (
        <div className="smallcard-container">
            <img src={props.imagem}/>
            <p><strong>{props.nome}</strong> {props.texto}</p>

        </div>
    )

}
export default CardPequeno