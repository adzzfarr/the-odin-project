import { useState } from 'react';
import './styles/App.css';
import { Scoreboard } from './components/Scoreboard.jsx';
import { MemoryCards } from './components/MemoryCards.jsx';

const TOTAL_CARDS = 12;

function App() {
	const defaultCardOrder = Array.from({ length: TOTAL_CARDS }, (_, index) => index + 1);

    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCardIds, setClickedCardIds] = useState(new Set());
	const [cardOrder, setCardOrder] = useState(defaultCardOrder);

    const handleCardClick = (id) => {
		if (clickedCardIds.has(id)) { // Invalid Card
            alert('You already clicked that card!');

            // Update best score
            setBestScore(Math.max(bestScore, currentScore));

            // Reset current score
            setCurrentScore(0);

            // Reset clicked cards
            setClickedCardIds(new Set());

			// Reset card order
			setCardOrder(defaultCardOrder);
        } else { // Valid Card
            // Increase current score
            const newScore = currentScore + 1;
            setCurrentScore(newScore);

            // Update clicked cards
            const updatedClickedCardIds = new Set(clickedCardIds);
            updatedClickedCardIds.add(id);
            setClickedCardIds(updatedClickedCardIds);

            // Check if the game is won
            if (newScore === TOTAL_CARDS) {
              alert('Congratulations! You won the game!');
              setBestScore(TOTAL_CARDS);
              setCurrentScore(0);
              setClickedCardIds(new Set());
			  setCardOrder(defaultCardOrder);
            }

			// Shuffle card order
			const shuffledCardOrder = shuffleArray(cardOrder);
			setCardOrder(shuffledCardOrder);
        }
    }

	return (
		<>
			<header>
			<div className='game-info'>
				<h1>Memory Card Game</h1>
				<h2>Get points by clicking on an image, but don't click on any more than once!</h2>
			</div>
			<Scoreboard currentScore={currentScore} bestScore={bestScore} />
			</header> 
			<main>
			<MemoryCards 
				cardOrder={cardOrder}
				onCardClicked={handleCardClick}
			/>
			</main>
		</>
	);
}

function shuffleArray(array) {
	const shuffledArray = [...array];

	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
	}

	return shuffledArray;
}

export default App;