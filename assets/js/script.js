// Duplicate cards array for pairs
const cardsArray = [
    { name: 'card1', img: 'https://via.placeholder.com/150/0000FF/808080?text=Card1' },
    { name: 'card2', img: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Card2' },
    { name: 'card3', img: 'https://via.placeholder.com/150/00FF00/000000?text=Card3' },
    { name: 'card4', img: 'https://via.placeholder.com/150/FFFF00/000000?text=Card4' },
    { name: 'card5', img: 'https://via.placeholder.com/150/FF00FF/000000?text=Card5' },
    { name: 'card6', img: 'https://via.placeholder.com/150/00FFFF/000000?text=Card6' }
];

// Duplicate cards array for pairs
const gameArray = [...cardsArray, ...cardsArray];
gameArray.sort(() => 0.5 - Math.random());
const gameboard = document.getElementById('gameboard');
let selectedCards = []; let matchedCards = [];
gameArray.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.name = card.name;
    const imgElement = document.createElement('img');
    imgElement.src = card.img;
    imgElement.alt = card.name;
    cardElement.appendChild(imgElement);
    gameboard.appendChild(cardElement);
    cardElement.addEventListener('click', () => {
        if (selectedCards.length < 2 && !cardElement.classList.contains('matched')) {
            cardElement.classList.add('selected');
            imgElement.style.display = 'block';
            selectedCards.push(cardElement);
            if (selectedCards.length === 2) {
                setTimeout(checkMatch, 1000);
            }
        }
    });
});
function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.name === card2.dataset.name) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards.push(card1, card2);
    } else {
        card1.classList.remove('selected');
        card2.classList.remove('selected');
        card1.querySelector('img').style.display = 'none';
        card2.querySelector('img').style.display = 'none';
    }
    selectedCards = [];
    if (matchedCards.length === gameArray.length) {
        setTimeout(() => alert('Congratulations! You found all matches!'), 500);
    }
}