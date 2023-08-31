import React from 'react';
import CardGame from '../CardGame';
import './style.css';

function CardFrontBack({ img }) {
    const handleClick = (event) => {
        const origin = event.target;
        const cardFrontBack = origin.closest('.card-front-back');
        cardFrontBack.classList.toggle('-active');
    };

    return (
        <article className="card-front-back" onClick={handleClick}>
            <div className="card -front">
                <CardGame />
            </div>
            <div className="card -back">
                <CardGame img={img} />
            </div>
        </article>
    );
}

export default CardFrontBack;
