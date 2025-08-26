import { useState } from 'react';
import './styles/App.css';
import { Scoreboard } from './components/scoreboard';
import { MemoryCards } from './components/memory-cards';

function App() {
  const [currentScore, setCurrentScore] = useState(0);

  const handleCurrentScoreChange = (score) => {
    setCurrentScore(score);
  };
  const [bestScore, setBestScore] = useState(0);

  const handleBestScoreChange = (score) => {
    setBestScore(score);
  };

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
          currentScore={currentScore}
          onCurrentScoreChange={handleCurrentScoreChange}
          bestScore={bestScore}
          onBestScoreChange={handleBestScoreChange}
        />
      </main>
    </>
  )
}

export default App
