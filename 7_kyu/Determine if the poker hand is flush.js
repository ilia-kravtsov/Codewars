/*
Determine if the poker hand is flush, meaning if the five cards are of the same suit.

Your function will be passed a list/array of 5 strings, each representing a poker card in the format "5H" (5 of hearts), meaning the value of the card followed by the initial of its suit (Hearts, Spades, Diamonds or Clubs). No jokers included.

Your function should return true if the hand is a flush, false otherwise.

The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

Examples
["AS", "3S", "9S", "KS", "4S"]  ==> true

["AD", "4S", "7H", "KS", "10S"] ==> false
*/

function isFlush(cards) {
  //   let subCards = [];
  //   for (let i = 0; i < cards.length; i++) {
  //     subCards.push(cards[i][cards[i].length - 1]);
  //   }
  //   return subCards.every((card, i) => card === cards[0][cards[0].length-1])

  //   let count = 0
  //   for (let i = 0; i < cards.length - 1; i++) {
  //     if (cards[i][cards[i].length-1] === cards[i+1][cards[i+1].length-1]) {
  //       count++
  //     }
  //   }
  //   return count === cards.length - 1

  let count = 0;
  let length = cards.length;
  for (let i = 0; i < length - 1; i++) {
    const current = cards[i];
    const next = cards[i + 1];
    if (current[current.length - 1] === next[next.length - 1]) {
      count++;
    }
  }
  return count === length - 1;
}
