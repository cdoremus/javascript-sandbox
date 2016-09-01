/**
 * An exploration of object properties
 *
 *
 *  FIXME: This is a work in progress . . .
 *
 * Run this code in node:
 * node index.js
 *
 */

const assert = require('../assert');

/**
  * Override of toString() to print out object properties
  *
  */
function toString(object) {
	var output = '';
	for (var property in object) {
		output += property + ': ' + object[property]+'; ';
	}
	return output;
}


/** Prints all the member fields and functions in an Object.
  *
  * FIXME: It does not work with number, boolean and undefined. Strings
  * print out the string characters.
  * @param o an object
  */
var print = function(o){
    let str='';

    for(var p in o) {
        if(typeof o[p] == 'string' || typeof o[p] == 'number' || typeof o[p] == 'boolean' || typeof o[p] == 'undefined' || typeof o[p] == 'function'){
            str+= p + ': ' + o[p]+';';
        } else { // object
            str+= p + ': { ' + print(o[p]) + '}';
        }
    }
    // if there are no properties, then return the parameter value
    if (str === '') {
        str = o;
    }

    return str;
}

function foo() {
	var bar = 'bar'; // private to function
	this.getBar = function() {
		return bar;
	};

}

var f = new foo();
//print a number (does not work)
console.log("Printing the number 123: " + print(123));
assert(print(123), 123, "Printing the number 123");
//print a boolean (does not work)
console.log("Printing the boolean true: " + print(true));
assert(print(true), true, "Printing the boolean true");
//print an undefined (does not work)
console.log("Printing the undefined value: " + print(undefined));
assert(print(undefined), undefined, "Printing the undefined value");
// prints the function (fields and inner function code)
console.log("Printing foo: " + print(f));


