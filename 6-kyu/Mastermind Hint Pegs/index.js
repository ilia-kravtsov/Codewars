/*
Mastermind
Mastermind is a two-player game where one player creates a four-color code from a possible six colors. The other player has ten turns to guess this code. After each guess, the "codemaker" places pegs corresponding to correct guesses and the "codebreaker" then guesses again, based on these pegs. Black pegs are given for every color in the guess that is correctly placed, and white pegs are given for other colors in the guess that are in the code, but were not guessed in the correct position.

More info: Mastermind.

Task
Your task is to implement a function that will compare the player's guess to the secret code and return an appropriate number of colored hints - one black peg for each correctly guessed color in a correct position, one white peg for each correct color in an incorrect position.

Specifics for this kata:
The number of colors in the code is random instead of always being 4
The number of possible colors has been increased
The same color may appear multiple times in different positions
Examples:
No elements match:
  code   = [1, 2, 3]
  guess  = [4, 5, 6]
  result = {black: 0, white: 0}

2 elements match, both in wrong positions:
  code   = [1, 2, 3]
  guess  = [2, 1, 4]
  result = {black: 0, white: 2}

3 elements match, one in correct position and two in wrong positions:
  code   = [1, 2, 3]
  guess  = [2, 1, 3]
  result = {black: 1, white: 2}

3 elements match, one in correct position and two in wrong positions:
  code   = [0, 0, 0, 1, 1]
  guess  = [2, 2, 0, 0, 0]
  result = {black: 1, white: 2}
*/

function getHints(answer, guess) {
  let black = 0;
  let white = 0;
  let answerMatched = new Array(answer.length).fill(false);
  let guessMatched = new Array(guess.length).fill(false);

  for (let i = 0; i < answer.length; i++) {
    if (guess[i] === answer[i]) {
      black++;
      answerMatched[i] = true;
      guessMatched[i] = true;
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (!guessMatched[i]) {
      for (let j = 0; j < answer.length; j++) {
        if (!answerMatched[j] && guess[i] === answer[j]) {
          white++;
          answerMatched[j] = true;
          break;
        }
      }
    }
  }

  return { black: black, white: white };
}
