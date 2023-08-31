import React from 'react';
import './style.css';

function PlayerScore({ points = 0 }) {
    return (
        <ol className="player-score" data-points={points}>
            <li className="pointer">ponto1</li>
            <li className="pointer">ponto2</li>
            <li className="pointer">ponto3</li>
        </ol>
    );
}

export default PlayerScore;