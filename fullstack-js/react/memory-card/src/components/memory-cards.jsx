export function MemoryCards({ currentScore, onCurrentScoreChange, bestScore, onBestScoreChange }) {
    function onValidCardClicked() {
        // Increase current score by 1
        onCurrentScoreChange(currentScore + 1);
    }

    function onInvalidCardClicked() {
        // Check if best score should be updated
        if (currentScore > bestScore) onBestScoreChange(currentScore);

        // Reset current score
        onCurrentScoreChange(0);
    }

    return (
        <>
            <button onClick={onValidCardClicked}>Clicked valid card</button>
            <br></br>
            <button onClick={onInvalidCardClicked}>Clicked invalid card</button>   
        </>
    );
}