/**
 * Simple program to show how to get input from the
 * Node console.
 *
 * This program gets two numbers from the console and
 * adds them together.
 *
 * @see https://nodejs.org/api/readline.html
 */

// readline allows to read data from a Readable stream
const readline = require('readline');

let num1 = 0;
let num2 = 0;
process.stdin.setEncoding('utf8');
console.log('-------------------------------------------------------')
console.log('Program demoing how to get information from the console');
console.log('-------------------------------------------------------')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'enter: ',
  terminal: false
});
rl.question('Enter two space-separated numbers: ', main);

// Alternate to using the question() function:
// show command prompt
// rl.prompt();
// on 'line' event call main(), sending in the line read
// rl.on('line', main);

function main(line) {
  readLine(line);
  const sum = add(num1, num2);
  if (isNaN(sum)) {
    console.error('ERROR: Sum is not a number');
  } else {
    console.log(`Sum is: ${sum}`);
  }
  rl.close();
  process.exit();
}

function readLine (line) {
  if (line !== '\n') {
    num1 = parseInt(line.toString().split(' ')[0], 10);
    num2 = parseInt(line.toString().split(' ')[1], 10);
  }
}

function add(a, b) {
  return a + b;
}
