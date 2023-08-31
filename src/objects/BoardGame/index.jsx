import React, { useState, useEffect } from 'react';
import './styles.css';
import CardFrontBack from '../../components/CardFrontBack';

function BoardGame() {
    const srcImg = ["blair1", "blair1", "blair2", "blair2", "blair3", "blair3"];
    const [cardsRandow, setCardsRandow] = useState(shuffleArray(srcImg));
    const [cardsActive, setCardsActive] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState(1);

    useEffect(() => {
        window.boardGame = {
            handleClick: handleBoardGameClick
        };
    }, []);

    // Embaralha as imagens
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // Função para comparar as cartas ativas
    function compareCards() {
        if (cardsActive.length === 2) {
            const [card1, card2] = cardsActive;
            const src1 = getCardSrc(card1);
            const src2 = getCardSrc(card2);
            return src1 === src2;
        }
        return false;
    }

    // Função para obter o src da imagem de uma carta
    function getCardSrc(card) {
        const cardBack = card.querySelector('.-back');
        const imgBack = cardBack.querySelector('img');
        return imgBack.getAttribute('src');
    }

    // Função para desvirar e ocultar as cartas ativas
    function flipAndHideCards() {
        cardsActive.forEach(card => card.classList.remove('-active'));
        setCardsActive([]);
    }

    // Manipulador de clique no tabuleiro do jogo
    function handleBoardGameClick() {
        const $boardGame = document.querySelector('.board-game');
        const newCardsActive = Array.from($boardGame.querySelectorAll('.card-front-back.-active'));

        if (newCardsActive.length === 2) {
            if (compareCards()) {
                console.log('iguais');
            } else {
                setTimeout(() => {
                    flipAndHideCards();
                    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
                }, 1000);
            }
        }

        setCardsActive(newCardsActive);
    }

    const htmlContent = cardsRandow.map((card, index) => (
        <CardFrontBack key={index} card={card} />
    ));

    return (
        <section className="board-game" onClick={handleBoardGameClick}>
            {htmlContent}
        </section>
    );
}

export default BoardGame;