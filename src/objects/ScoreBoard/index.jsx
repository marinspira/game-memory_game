import React from 'react';
import ArrowDown from '../../components/ArrowDown';
import PlayerScore from '../../components/PlayerScore';
import './style.css';

function ScoreBoard() {
    return (
        <header className="score-board">
            {ArrowDown({ currentPlayer: 2 })}
            <p>Player 1</p>
            {PlayerScore({ points: 1 })}
            <p>vs</p>
            {PlayerScore({ points: 2 })}
            <p>Player 2</p>
        </header>
    );
}

export default ScoreBoard;