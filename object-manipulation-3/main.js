console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
- two cards to each of four players and then declare the winner
- create a collection of four objects that represent players. (name, hand)
- create a collection of 52 objects that represent a standard 52 card deck (rank, suit)
  - create a function for creating the card deck using the ranks and the suits
  - make an empty 'deck' array and an empty 'card' object and assign each suit and rank by looping over.
  - make sure the length is 52
- shuffle the deck
- deal two cards to each player(no two players should be able to receive the same card)
  - add two cards in the players hand array
  - remove previous two cards whenever assigning it to array so that each player has different cards
- find the player with the highest score.
  - rank 'ace' gets 11 points
  - rank 'jack', 'queen', 'king' gets 10 points
  - other numbers get points as much as their value.
  - make sure to reset the total score before you assign it to the next player. (don't add up the score of each player)
- log the winning player to the console.
  - make an array for all the players' scores
  - find the highest score in the array
  - if that score matches with the player, that player is the winner

- create function when there is a tie
  - make a new storage
  - if there's more than one winner, store the winners into the storage
  - start the game with the winners again
*/

var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var ranks = ['jack', 'queen', 'king', 'ace', 2, 3, 4, 5, 6, 7, 8, 9, 10];
var players = [
  { name: 'haku', hand: [], score: 0 },
  { name: 'sen', hand: [], score: 0 },
  { name: 'kiki', hand: [], score: 0 },
  { name: 'toto', hand: [], score: 0 }
];
var deck = [];

function createCardDeck(suits, ranks) {

  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
      var card = { suit: suits[i], rank: ranks[j] };
      deck.push(card);
    }
  }
  deck = _.shuffle(deck);
  return deck;

}

function dealHandToPlayers(cards) {
  var deck = createCardDeck(suits, ranks);
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < cards; j++) {
      players[i].hand.push(deck[j]);
      deck.splice(i, 1);
    }
  }
  return players;
}

function getScore(players) {
  players = dealHandToPlayers(2);

  for (var i = 0; i < players.length; i++) {
    var totalScore = 0;

    for (var j = 0; j < players[i].hand.length; j++) {
      if (players[i].hand[j].rank === 'ace') {
        totalScore += 11;
      } else if (players[i].hand[j].rank === 'king') {
        totalScore += 10;
      } else if (players[i].hand[j].rank === 'queen') {
        totalScore += 10;
      } else if (players[i].hand[j].rank === 'jack') {
        totalScore += 10;
      } else {
        totalScore += players[i].hand[j].rank;
      }
    }
    players[i].score = totalScore;
  }

  return players;
}

var highest = 0;
var winner = '';
var winners = [];
function getWinner(players) {

  players = getScore(players);

  for (var i = 0; i < players.length; i++) {

    if (highest < players[i].score) {
      highest = players[i].score;
      winner = players[i];
    } else if (highest === players[i].score) {
      winners.push(players[i]);
      i++;
    }
  }

  if (winners.length > 1) {
    handleTies(winners);
  }
  return winner.name;
}

console.log('The winner is ' + getWinner() + ' !!!');

function handleTies(winners) {
  var highest = 0;
  winners = getScore(winners);

  for (var i = 0; i < winners.length; i++) {
    winners[i].hand.push(deck[i]);
    deck.splice(i, 1);
  }

  getScore(winners);

  for (i = 0; i < winners.length; i++) {
    if (highest < winners[i].score) {
      highest = winners[i].score;
    } else if (winners[i].score !== highest) {
      winners.splice(i, 1);
    }
  }

  if (winners.length === 1) {
    winner = winners[0];
    return winner.name;
  }
  handleTies(winners);
}

function playGame(players, cards) {
  createCardDeck(suits, ranks);
  getWinner(players);
}

playGame(players, 2);
