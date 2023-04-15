// deposit some money
// determine number of lines to bet on
// collect a bet amount
// spin the slot machine
// check of the user won
// give the user their winnings
// play again

const prompt = require('prompt-sync')();

const ROWS = 3;
const COLS = 3;

// how many A,B,... we have in each column
const SYMBOLS_COUNT = {
     "A": 2,
     "B": 4,
     "C": 6,
     "D": 8
}

// value multiplier
const SYMBOL_VALUES = {
     "A": 5,
     "B": 4,
     "C": 3,
     "D": 2
}







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

function getBet(balance, lines) {
     while (true) {
          const bet = prompt('Enter the total bet per line: ');
          const numberBet = parseFloat(bet);

          if (isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines)) {
               console.log('invalid bet, try again!');
          } else {
               return numberBet;
          }
     }
}

function spin() {
     const symbols = [];
     for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
          for (let i = 0; i < count; i++) {
               symbols.push(symbol);
          }
     }

     const reels = [];
     for (let i = 0; i < COLS; i++) {
          reels.push([]);
          const reelSymbols = [...symbols];
          for (let j = 0; j < ROWS; j++) {
               const randomIndex = Math.floor(Math.random() * reelSymbols.length);
               const selectedSymbol = reelSymbols[randomIndex];
               reels[i].push(selectedSymbol);
               reelSymbols.splice(randomIndex, 1);
          }
     }
     return reels;
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reels = spin();
// deposit();