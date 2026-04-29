function krazyKingBlackjack(hand, k) {
  let sum = 0;
  let aces = 0;
  let kings = 0;
​
  for (let card of hand) {
    if (card === 'A') {
      aces++;
      sum += 1;
    } else if (card === 'K') {
      kings++;
      sum += Math.min(10, k);
    } else if (card === 'J' || card === 'Q') {
      sum += 10;
    } else {
      sum += Number(card);
    }
  }
​
  for (let i = 0; i < aces; i++) {
    if (sum + 10 <= 21) {
      sum += 10;
    }
  }
​
  const baseKing = Math.min(10, k);
  const upgrade = Math.max(10, k) - baseKing;
​
  for (let i = 0; i < kings; i++) {
    if (sum + upgrade <= 21) {
      sum += upgrade;
    }
  }
​
  return sum <= 21 ? sum : false;
}