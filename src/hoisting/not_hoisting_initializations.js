
var h5 = 5; // Assign 5 to x
console.log(`Variable \'h3\'= ${h5} declared and assigned at the same time before use here.`);
console.log(`Variable \'h4\'= ${h6} NOT hoisted as it is declared and assigned
  at the same time after it is used here.`);
var h6 = 7;
console.log(`Variable \'h4\'= ${h6} used here after it is declared and assigned.`);

