import { Card } from "./Card";
import '../styles/MemoryCards.css';

export function MemoryCards({ onCardClicked }) {
    return (
        <div className="memory-cards">
            {
                Array
                    .from({ length: 12 }, (_, index) => index + 1)
                    .map((id) => (
                        <Card key={id} id={id} onCardClicked={onCardClicked} />
                    ))
            }
        </div>
    );
}
