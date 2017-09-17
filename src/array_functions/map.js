/**
 * Demonstrates the Array.map() function.
 */
const assert = require('../assert');

var a1 = [1,2,3,4];
console.log('a1: ' + a1);

console.log("SQUARE MAP FCN")
var m1 = a1.map(function(x) {
	console.log(x);
	return x*x;
});
console.log('m1: ' + m1);
assert([1,4,9,16], m1, "SQUARE MAP FCN");


console.log("MAP FCN MULTIPLY BY INDEX")
var m2 = a1.map(function(x, i) {
	console.log('a1[' + i + ']=' + x);
	return x*i;
});
console.log('m2: ' + m2);
assert([0,2,6,12], m2, "MAP FCN MULTIPLY BY INDEX");
