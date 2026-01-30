function sortPoker(john, uncle) {
  const rankOrder = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  const rankMap = Object.fromEntries(rankOrder.map((r, i) => [r, i]));
​
  const parseCards = str =>
    str.match(/([♠♥♦♣])(10|[2-9JQKA])/g)
       .map(card => ({
         suit: card[0],
         rank: card.slice(1)
       }));
​
  const johnCards = parseCards(john);
  const uncleCards = parseCards(uncle);
​
  const suitOrder = [];
  for (const c of uncleCards) {
    if (!suitOrder.includes(c.suit)) {
      suitOrder.push(c.suit);
    }
  }
​
  const suitMap = Object.fromEntries(
    suitOrder.map((s, i) => [s, i])
  );
​
  johnCards.sort((a, b) => {
    if (a.suit !== b.suit) {
      return suitMap[a.suit] - suitMap[b.suit];
    }
    return rankMap[a.rank] - rankMap[b.rank];
  });
​
  return johnCards.map(c => c.suit + c.rank).join('');
}
​