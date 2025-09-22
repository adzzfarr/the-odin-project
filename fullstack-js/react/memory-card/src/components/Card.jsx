const imageLinks = {
    1: 'link',
    2: 'link',
    3: 'link',
    4: 'link',
    5: 'link',
    6: 'link',
    7: 'link',
    8: 'link',
    9: 'link',
    10: 'link',
    11: 'link',
    12: 'link',
};

export function Card({ id, onCardClicked }) {
    const imageUrl = imageLinks[id];
    return (
        <div className="card" onClick={() => onCardClicked(id)}>
            <img src={imageUrl} alt={`Card ${id}`} />
        </div>
    );
}