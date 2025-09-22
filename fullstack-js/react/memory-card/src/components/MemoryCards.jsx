import { Card } from "./Card.jsx";
import '../styles/MemoryCards.css';

export function MemoryCards({ cardOrder, onCardClicked }) {
    return (
        <div className="memory-cards">
            {
                cardOrder.map((id) => (
                    <Card key={id} id={id} onCardClicked={onCardClicked} />
                ))
            }
        </div>
    );
}
