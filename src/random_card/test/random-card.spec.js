
const RandomCard = require('..');
const assert = require('assert');

const reps = 1000;


describe('Random Card & Suite', () => {
    let rc;
    beforeEach(() => {
        rc = new RandomCard();
    });
    it('should pick a random suite', () => {
        for (var i = 0; i < reps; i++) {
            let suite = rc.randomSuite();
            testSuite(suite);
        }
    });
    it('should pick a random card', () => {
        for (var i = 0; i < reps; i++) {
            let card = rc.randomCard();
            testCard(card);
        }
    });

    let testSuite = (suite) => {
        assert(rc.getSuiteNames().includes(rc.getCards()[suite][0]), `Not a valid suite at index ${suite}`);
    }

    let testCard = (card) => {
        assert(rc.getValidCards().includes(rc.getValidCards()[card]), `Not a valid card at index ${card}`);
    }

});