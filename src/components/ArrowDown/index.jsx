import React from 'react';
import './style.css';

function ArrowDown({ currentPlayer = 1 }) {
    return (
        <img className="arrow-down" data-currentplayer={currentPlayer} src="images/arrowdown.png" alt="Ícone de seta" />
    );
}

export default ArrowDown;