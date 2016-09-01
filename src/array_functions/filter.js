/**
 * Demonstrates the Array.filter() function
 */
const assert = require('../assert');

var a1 = [1,2,3,4,5,6,7,8,9,10];
console.log('a1: ' + a1);

console.log("FILTER FCN >= 3")
var m1 = a1.filter(function(x) {
	console.log(x);
	return x >= 3;
});
console.log('ANSWER: m1= ' + m1);
assert([3,4,5,6,7,8,9,10], m1, "FILTER FCN >= 3");


console.log("FILTER FCN item * index < 20");
var m2 = a1.filter(function(x, i) {
	console.log('a1[' + i + ']=' + x);
	return x*i < 20;
});
console.log('ANSWER: m2= ' + m2);
assert([1,2,3,4], m2, "FILTER FCN item * index < 20");
