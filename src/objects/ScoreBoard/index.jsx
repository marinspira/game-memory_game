import React from 'react';
import ArrowDown from '../../components/ArrowDown';
import PlayerName from '../../components/PlayerName';
import PlayerScore from '../../components/PlayerScore';
import './style.css';

function ScoreBoard() {
    return (
        <header className="score-board">
            {ArrowDown({ currentPlayer: 2 })}
            {PlayerName({ content: 'Player1' })}
            {PlayerScore({ points: 1 })}
            <p>vs</p>
            {PlayerScore({ points: 2 })}
            {PlayerName({ content: 'Player2' })}
        </header>
    );
}

export default ScoreBoard;