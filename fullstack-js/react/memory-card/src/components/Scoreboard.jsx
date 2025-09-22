import '../styles/Scoreboard.css';

export function Scoreboard({ currentScore, bestScore }) {
    return (
        <>
            <div className='scoreboard'>
                <h2>Current Score: {currentScore}</h2>
                <h2>Best Score: {bestScore}</h2>
            </div>
        </>
    );
}