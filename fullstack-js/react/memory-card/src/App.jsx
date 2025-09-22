import { useState } from 'react';
import './styles/App.css';
import { Scoreboard } from './components/Scoreboard';
import { MemoryCards } from './components/MemoryCards';

const TOTAL_CARDS = 12;

export default function App() {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCardIds, setClickedCardIds] = useState(new Set());
  
    const handleCardClick = (id) => {
		if (clickedCardIds.has(id)) { // Invalid Card
            // Update best score
            setBestScore(Math.max(bestScore, currentScore));

            // Reset current score
            setCurrentScore(0);

            // Reset clicked cards
            setClickedCardIds(new Set());
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
            }
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
				onCardClicked={handleCardClick}
			/>
			</main>
		</>
	);
}