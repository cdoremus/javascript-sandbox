
console.log('------------------------------------------------------------------------------');
console.log('JavaScript variable declarations using \'var\' are hoisted');
console.log('------------------------------------------------------------------------------');
// run hoisting_declarations.js
require('./hoisting_declarations');

console.log('------------------------------------------------------------------------------');
console.log('JavaScript variable declarations and assignments ');
console.log(' (initializations) using \'var\' are NOT hoisted');
console.log('------------------------------------------------------------------------------');
require('./not_hoisting_initializations');

console.log('------------------------------------------------------------------------------');
console.log('JavaScript declarations using \'var\' are hoisted');
console.log('  while declarations using \'let\' are NOT hoisted');
console.log('------------------------------------------------------------------------------');
require('./es2015_hoisting');


console.log('------------------------------------------------------------------------------');
console.log('JavaScript functions definitions are hoisted while ');
console.log(' function expressions are NOT hoisted');
console.log('------------------------------------------------------------------------------');
require('./function_hoisting');
