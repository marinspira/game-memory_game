import React from 'react';
import './style.css';
import arrow from '../../assets/arrowdown.png'

function ArrowDown({ currentPlayer = 1 }) {
    return (
        <img className="arrow-down" data-currentplayer={currentPlayer} src={arrow} alt="Ícone de seta" />
    );
}

export default ArrowDown;