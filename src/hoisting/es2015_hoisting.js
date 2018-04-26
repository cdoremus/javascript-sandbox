
var h5 = 5; // Assign
console.log(`Variable \'h5\'= ${h5} declared and assigned using \'var\' at the same time before use here.`);
console.log(`Variable \'h6\'= ${h6} NOT hoisted as it is declared and assigned
using \'var\' at the same time after it is used here.`);
var h6 = 7;
console.log(`Variable \'h6\'= ${h6} used here after it is declared using \'var\' and assigned.`);


let h7 = 5; // Assign
console.log(`Variable \'h7\'= ${h7} declared and assigned using \'let\' at the same time before use here.`);
try {
h8 = 10;
console.error('ERROR IF GOT HERE');
} catch(error) {
  console.log(`Use of variable \'h8\' before it is declared and assigned
  using \'let\' at the same time throws an error. ERROR: error.message. Error is ${error instanceof ReferenceError ? '' : ' NOT '} an instanceof ReferenceError`);

}
let h8 = 7;
console.log(`Variable \'h8\'= ${h8} used here after it is declared using \'let\' and assigned.`);
