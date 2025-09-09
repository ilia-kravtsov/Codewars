function scoreHand(cards) {
  let total = 0;
  let aces = 0;
​
  for (let card of cards) {
    if (card === "J" || card === "Q" || card === "K") {
      total += 10;
    } else if (card === "A") {
      total += 11;
      aces++;
    } else {
      total += parseInt(card, 10);
    }
  }
​
  while (total > 21 && aces > 0) {
    total -= 10;
    aces--;
  }
​
  return total;
}