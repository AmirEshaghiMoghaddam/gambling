// deposit some money
// determine number of lines to bet on
// collect a bet amount
// spin the slot machine
// check of the user won
// give the user their winnings
// play again

const prompt = require('prompt-sync')();

function deposit() {
     while (true) {
          const depositAmount = prompt('Enter a deposit amount: ');
          const numberDepositAmount = parseFloat(depositAmount);

          if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
               console.log('invalid deposit amount, try again!');
          } else {
               return numberDepositAmount;
          }
     }
}
function getNumberOfLines() {
     while (true) {
          const lines = prompt('Enter the number of lines to bet on (1-3): ');
          const numberOfLines = parseFloat(lines);

          if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
               console.log('invalid number of lines, try again!');
          } else {
               return numberOfLines;
          }
     }
}






let balance = deposit();
const numberOfLines = getNumberOfLines();

// deposit();