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
var winScore = 0; //initial win value
var lossScore = 0; //initial loss value

//reset code. erases changes and recreates game-board
reset = function() {
    cardsInPlay = [];
    document.getElementById('game-board').innerHTML = "";
    createBoard();
};

document.getElementById("resetButton").addEventListener('click', reset);
//end reset code


function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
  winScore = winScore + 1; //increase wins if win
} else {
  alert("Sorry, try again.");
  lossScore = lossScore + 1; //increase losses if loss
};
setScore(); // displays updated score. setScore() defined below.
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
    };
};

//score code to insert scores into HTML
function setScore() {
    document.getElementById('score').innerHTML = "Score: " + winScore + " : " + lossScore;
};

setScore();
createBoard();




// TRIED AND FAILED RESET CODE

//.cloneNode + .replaceWith