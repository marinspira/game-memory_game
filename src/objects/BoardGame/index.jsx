import React, { useState, useEffect } from 'react';
import CardGame from './../../components/CardGame/index';
import blair1 from '../../assets/blair1.webp'
import blair2 from '../../assets/blair2.webp'
import blair3 from '../../assets/blair3.webp'
import './styles.css'

const cardsData = [
    { id: 1, content: <CardGame icon={blair1} />, flipped: false },
    { id: 1, content: <CardGame icon={blair1} />, flipped: false },
    { id: 2, content: <CardGame icon={blair2} />, flipped: false },
    { id: 2, content: <CardGame icon={blair2} />, flipped: false },
    { id: 3, content: <CardGame icon={blair3} />, flipped: false },
    { id: 3, content: <CardGame icon={blair3} />, flipped: false },
];

function MemoryGame() {
    const [cards, setCards] = useState(cardsData);
    const [flippedCount, setFlippedCount] = useState(0);
    const [flippedIndexes, setFlippedIndexes] = useState([]);

    useEffect(() => {
        if (flippedCount === 2) {
            const [card1Index, card2Index] = flippedIndexes;
            if (cards[card1Index].id === cards[card2Index].id) {
                // Pares correspondentes encontrados, deixe as cartas viradas
                const updatedCards = cards.map((card, index) => {
                    if (index === card1Index || index === card2Index) {
                        return { ...card, flipped: true };
                    }
                    return card;
                });
                setCards(updatedCards);
            } else {
                // Pares não correspondentes, vire as cartas de volta após um atraso
                setTimeout(() => {
                    const updatedCards = cards.map((card, index) => {
                        if (index === card1Index || index === card2Index) {
                            return { ...card, flipped: false };
                        }
                        return card;
                    });
                    setCards(updatedCards);
                }, 1000);
            }

            // Reinicie a contagem de cartas viradas
            setFlippedCount(0);
            setFlippedIndexes([]);
        }
    }, [flippedCount, flippedIndexes, cards]);

    const handleCardClick = (index) => {
        if (flippedCount < 2 && !cards[index].flipped) {
            setFlippedCount(flippedCount + 1);
            setFlippedIndexes([...flippedIndexes, index]);

            const updatedCards = cards.map((card, cardIndex) => {
                if (cardIndex === index) {
                    return { ...card, flipped: true };
                }
                return card;
            });
            setCards(updatedCards);
        }
    };

    return (
        <div className="memory-game">
            <div className="board-game">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`card ${card.flipped ? 'flipped' : ''}`}
                        onClick={() => handleCardClick(index)}
                    >
                        {card.flipped ? card.content : <CardGame />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemoryGame;
