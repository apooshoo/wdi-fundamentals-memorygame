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

//reset code
var noCardsInPlay = [];
var backupBoard = document.getElementById('game-board').cloneNode(true);


reset = function() {
    cardsInPlay = noCardsInPlay;
    document.getElementById('game-board').replaceWith(backupBoard);
    createBoard();
};

document.getElementById("resetButton").addEventListener('click', reset);
//end reset code


function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
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

//Could not find a way to reset -non-forms. The best I could probably do is refresh. Because of that, I can't extend the game and keep score.
//Assuming I could, I'd keep score like this.

/*
IN HTML:
<p id='score' class="clearfix"></p>

IN JS:

var wins = 0
var losses = 0
document.getElementById('score').innerHTML = wins + " : "" + losses;


function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
  wins = wins + 1;
} else {
  alert("Sorry, try again.");
  losses = losses + 1;
}
}


*/


//QUESTIONS
// 1) How is the function linked to the array? cards.length?

// 2) is it necessary for createboard() to be after flipcard() because flipcard() is included later? what about 'data-id' going the other way?