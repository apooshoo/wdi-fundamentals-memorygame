var cards = [
{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
},
{
    rank: "king",
    suit: "hearts",
    cardImage:"images/king-of-hearts.png"
},
{
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
},
];
var cardsInPlay = [];

function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}



function flipCard() {
    var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank + ".")
	cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length < 2) {
		return;
	}
	checkForMatch();
}

function createBoard() {
    for (var i = 0; i < cards.length; i += 1) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}

createBoard();

//Note: I put the checkformatch results in consolelog to prevent popups

// 1) How is the function linked to the array?
// 2) is it necessary for createboard() to be after flipcard() because flipcard() is included later? what about 'data-id' going the other way?