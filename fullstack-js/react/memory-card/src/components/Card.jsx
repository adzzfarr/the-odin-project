import '../styles/Card.css';

export function Card({ id, onCardClicked }) {
    const { name, imageUrl } = cardData[id];
    return (
        <div className="card" onClick={() => onCardClicked(id)}>
            <img src={imageUrl} alt={`Card ${id}`} />
            <h3>{name}</h3>
        </div>
    );
}

const cardData = {
    1: {
        name: 'Bulbasaur',
        imageUrl:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png',
    },
    2: {
        name: 'Charmander',
        imageUrl:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
    },
    3: {
        name: 'Squirtle',
        imageUrl:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png',
    },
    4: {
        name: 'Pichu',
        imageUrl:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/172.png',
    },
    5: {
        name: 'Ivysaur',
        imageUrl:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png',
    },
    6: {
       name: 'Wartortle',
       imageUrl:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/008.png',
    },
    7: {
        name: 'Charmeleon',
        imageUrl:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png',
    },
    8: {
        name: 'Pikachu',
        imageUrl:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png',
    },
    9: {
        name: 'Venusaur',
        imageUrl:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png',
    },
    10: {
        name: 'Blastoise',
        imageUrl:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png',
    },
    11: {
        name: 'Charizard',
        imageUrl:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png',
    },
    12: {
        name: 'Raichu',
        imageUrl:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/026.png',
    },
};