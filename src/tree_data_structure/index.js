/**
 * FIXME: not completed
 */

const _ = require('lodash');

class Person {
    constructor(lastName, firstName, address, birthYear) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address || new Address('US');
        this.birthYear = birthYear || 1900;
    }
}

class Address {
    constructor(country) {
        this.country = country;
    }
}

let people = [
    new Person('Curry', 'Haskell', null, 1900),
    new Person('Rosser', 'Barkley', new Address('Greece'), 1907),
    new Person('Von Neumann', 'John', new Address('Hungary'), 1903),
    new Person('Church', 'Alonzo', null, 1903),
    new Person('Hilbert', 'David', new Address('Germany'), 1862),
    new Person('Turing', 'Alan', new Address('England'), 1912),
    new Person('Kleene', 'Stephen', null, 1909)

]