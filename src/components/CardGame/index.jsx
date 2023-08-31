import React from 'react';
import './style.css';
import me from '../../assets/me.webp'

function CardGame({ icon = me }) {
    return (
        <article className="card-game">
            <img src={icon} alt="Ícone do jogo" />
        </article>
    );
}

export default CardGame;