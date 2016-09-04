/**
 * Select a random card from a deck
 *
 * To run in node:
 * node index.js
 * or run in npm:
 * npm start
 */

const assert = require('assert');

const validCards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// Suites in the deck
const spades = ['spades', ...validCards];
const hearts = ['hearts', ...validCards];
const diamonds = ['diamonds', ...validCards];
const clubs = ['clubs', ...validCards];
// All suites with cards
const cards = [spades, hearts, diamonds, clubs];
const suiteNames = [spades[0], hearts[0], diamonds[0], clubs[0]];

class RandomCard {

        constructor(){}

    // functions to find random suite and card
    randomCard() { return Math.floor((Math.random() * 13) + 1)} // 14 possible cards, but first one is the
    randomSuite() { return Math.floor(Math.random() * 4)} // 4 possible suites

    getRandomSuite() { return this.randomSuite()};
    getRandomCard() { return this.randomCard()};

    getValidCards() { return validCards};

    getCards() {return cards};

    getSuiteNames() { return suiteNames };

}
// // find chosen suite name
// let chosenSuite = cards[suite][0];
// // find chosen card
// let chosenCard = cards[suite][card]
// // display chosen suite and card
// console.log(`Suite : ${chosenSuite}`)
// console.log(`Card : ${chosenCard}`)
// // unit tests
// assert.ok(validCards.includes(chosenCard), "Random card is valid");
// assert.ok(suiteNames.includes(chosenSuite), "Random suite is valid");

module.exports = RandomCard;
