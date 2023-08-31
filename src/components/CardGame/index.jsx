import React from 'react';
import './style.css';

function CardGame({ icon = 'me' }) {
    return (
        <article className="card-game">
            <img src={`images/${icon}.webp`} alt="Ícone do jogo" />
        </article>
    );
}

export default CardGame;