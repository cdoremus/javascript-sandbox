/**
 * Select a random card from a deck
 *
 * To run in node:
 * node index.js
 */

// Suites in the deck
const spades = ['spades', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const hearts = ['hearts', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const diamonds = ['diamonds', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const clubs = ['hearts', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const cards = [spades, hearts, diamonds, clubs];

// functions to find random suite and card
let randomCard = () => Math.floor((Math.random() * 13) + 1); // index 1 - 13, skipping first item
let randomSuite = () => Math.floor(Math.random() * 3); // index 0 - 3

//select random suite and card using functions
let suite = randomSuite();
let card = randomCard();

// find chosen suite name
let chosenSuite = cards[suite][0];
// find chosen card
let chosenCard = cards[suite][card]
// display chosen suite and card
console.log(`Suite : ${chosenSuite}`)
console.log(`Card : ${chosenCard}`)