/*
Wordle is a game where users try to guess a hidden 5 letter word. Feedback is given for each guess, in the form of colored tiles, indicating when letters match or occupy the correct position.

see: https://www.nytimes.com/games/wordle/index.html

The Brief
Make a function that takes in a 5 letter guess and, comparing to a known solution, returns clues for the user to solve the wordle puzzle.

Requirements
The function takes in two strings of 5 letters each, a guess and a solution.
The function returns a string of 5 letters.
The returned string is composed of letters each corresponding to a letter of the guess: 'b' (black) when the letter is not present in the answer; 'y' (yellow) when the letter is present but in a different location; and 'g' (green) when the letter is present and in the right location.
Duplicates
A letter appearing in the correct place is always green, including if it appears elsewhere in the word.
A letter can only be green or yellow as many times as it appears in the correct answer. Extra occurences of that letter are marked as 'b'. Below are some examples, see example tests for more:
letters are evaluated left to right.
Guess: xxxxx
Answer: yxxxx
Expected Output: bgggg 
Explanation: extra letters marked as 'b'

guess: xxxxz 
answer:aaaax 
expected output: ybbbb 
first x marked as 'y',  and each one as 'b' after
*/

function resolver(guess, solution) {
  if (guess.length !== 5 || solution.length !== 5) {
    throw new Error("Both guess and solution must be 5 letters long.");
  }

  let result = "";
  const solutionLetters = {};

  for (const char of solution) {
    solutionLetters[char] = (solutionLetters[char] || 0) + 1;
  }

  const greens = Array(5).fill(false);
  for (let i = 0; i < 5; i++) {
    if (guess[i] === solution[i]) {
      result += "g";
      greens[i] = true;
      solutionLetters[guess[i]] -= 1;
    } else {
      result += "b";
    }
  }

  for (let i = 0; i < 5; i++) {
    if (result[i] === "b" && solutionLetters[guess[i]] > 0) {
      result = result.slice(0, i) + "y" + result.slice(i + 1);
      solutionLetters[guess[i]] -= 1;
    }
  }

  return result;
}