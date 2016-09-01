/**
 * Demonstrates Array.filter()
 * chained with the Array.map() function.
 */
const assert = require('../assert');

var a1 = [1,2,3,4,5,6,7,8,9,10];
console.log('a1: ' + a1);

console.log("FILTER >= 7 AND MAP THE SQUARE OF AN ITEM")
var m1 = a1.filter(function(x) {
	console.log(x);
	return x >= 7;
}).map(function(params) {
	return params * params;
});
console.log('ANSWER: m1= ' + m1);
assert([49,64,81,100], m1, "FILTER >= 7 AND MAP THE SQUARE OF AN ITEM");


console.log("MAP THE SQUARE OF AN ITEM AND FILTER >= 7")
var m2 = a1.map(function(x) {
	console.log(x);
	return x * x;
}).filter(function(params) {
	return params >= 7;
});
console.log('ANSWER: m2= ' + m2);
assert([9,16,25,36,49,64,81,100], m2, "MAP THE SQUARE OF AN ITEM AND FILTER >= 7");


// console.log("FILTER FCN iten * index < 20")
// var m2 = a1.filter(function(x, i) {
// 	console.log('a1[' + i + ']=' + x);
// 	return x*i < 20;
// });
// console.log('ANSWER: m2= ' + m2);
