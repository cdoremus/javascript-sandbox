/**
 * Simple assertion utility for unit testing.
 * It works with arrays and primative values (string, number, boolean)
 *
 */
let count = 0;

let assert = (exp1, exp2, message = 'OK') => {
    let testNo =  `Test ${++count}`;
    // test each item in an array
    if (Array.isArray(exp1) && Array.isArray(exp2)) {
        testArray(exp1, exp2, testNo, message);
    } else {
        if (exp1 === exp2) {
            success(testNo, message);
        } else {
            failure(testNo, message, exp1, exp2);
        }
    }
}

let testArray = (exp1, exp2, testNo, message) => {
    let ok = true;
    if (exp1.length === exp2.length) {
        for(let i = 0; i < exp1.length; i++) {
            if (exp1[i] !== exp2[i]) {
                ok = false;
                break;
            }
        }
    } else {
        ok = false;
    }
    if (ok) {
        success(testNo, message);
    } else {
        failure(testNo, message, exp1, exp2);
    }
}

let success = (testNo, message) => {
    console.log(`${testNo} SUCCESS: ${message}`);
}

let failure = (testNo, message, exp1, exp2) => {
    if (message === 'OK') {
        message = '';
    }
    console.error(`${testNo} FAILED: ${message} ; ${exp1} !== ${exp2}`);
    throw new Error(`Assertion failed for ${testNo}: ${message} ; ${exp1} !== ${exp2}`);

}


module.exports = assert;