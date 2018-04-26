
// Outputs: "Definition hoisted!"
functionDefinitionHoisted();

// TypeError: undefined is not a function
try {
  functionExpressionNotHoisted();
  console.log('THIS SHOULD NOT BE PRINTED');
} catch (error) {
  console.log(`Function expressions are not hoisted and calling them
   before they are created and assigned will ${error instanceof TypeError ? '' : ' NOT '}
   throw a TypeError`);
}

function functionDefinitionHoisted() {
    console.log('Function definition hoisted!');
}

var functionExpressionNotHoisted = function() {
    console.log('Function expression not hoisted.');
};