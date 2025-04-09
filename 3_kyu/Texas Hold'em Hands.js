/*
Texas Hold'em is a Poker variant in which each player is given two "hole cards". Players then proceed to make a series of bets while five "community cards" are dealt. If there are more than one player remaining when the betting stops, a showdown takes place in which players reveal their cards. Each player makes the best poker hand possible using five of the seven available cards (community cards + the player's hole cards).

Possible hands are, in descending order of value:

Straight-flush (five consecutive ranks of the same suit). Higher rank is better.
Four-of-a-kind (four cards with the same rank). Tiebreaker is first the rank, then the rank of the remaining card.
Full house (three cards with the same rank, two with another). Tiebreaker is first the rank of the three cards, then rank of the pair.
Flush (five cards of the same suit). Higher ranks are better, compared from high to low rank.
Straight (five consecutive ranks). Higher rank is better.
Three-of-a-kind (three cards of the same rank). Tiebreaker is first the rank of the three cards, then the highest other rank, then the second highest other rank.
Two pair (two cards of the same rank, two cards of another rank). Tiebreaker is first the rank of the high pair, then the rank of the low pair and then the rank of the remaining card.
Pair (two cards of the same rank). Tiebreaker is first the rank of the two cards, then the three other ranks.
Nothing. Tiebreaker is the rank of the cards from high to low.
Given hole cards and community cards, complete the function hand to return the type of hand (as written above, you can ignore case) and a list of ranks in decreasing order of significance, to use for comparison against other hands of the same type, of the best possible hand.

hand(["A:♠", "A♦"], ["J♣", "5♥", "10♥", "2♥", "3♦"])
// ...should return {type: "pair", ranks: ["A", "J", "10", "5"]}
hand(["A♠", "K♦"], ["J♥", "5♥", "10♥", "Q♥", "3♥"])
// ...should return {type: "flush", ranks: ["Q", "J", "10", "5", "3"]}
EDIT: for Straights with an Ace, only the ace-high straight is accepted. An ace-low straight is invalid (ie. A,2,3,4,5 is invalid). This is consistent with the author's reference solution. ~docgunthrop

Algorithms
*/

function hand(holeCards, communityCards) {
  const allCards = [...holeCards, ...communityCards].map((card) => {
    const suit = card.slice(-1);
    const rankPart = card.slice(0, -1);
    let value;
    if (rankPart === "A") value = 14;
    else if (rankPart === "K") value = 13;
    else if (rankPart === "Q") value = 12;
    else if (rankPart === "J") value = 11;
    else value = parseInt(rankPart, 10);
    return { value, rank: rankPart, suit };
  });

  const combos = combinations(allCards, 5);

  const typeRanks = {
    "straight-flush": 8,
    "four-of-a-kind": 7,
    "full house": 6,
    flush: 5,
    straight: 4,
    "three-of-a-kind": 3,
    "two pair": 2,
    pair: 1,
    nothing: 0,
  };

  let best = null;

  function rankToValue(r) {
    if (r === "A") return 14;
    if (r === "K") return 13;
    if (r === "Q") return 12;
    if (r === "J") return 11;
    return parseInt(r, 10);
  }

  for (const combo of combos) {
    const evaluated = evaluateHand(combo);
    const typeRank = typeRanks[evaluated.type];
    const numericRanks = evaluated.ranks.map(rankToValue);
    const sortKey = [typeRank, ...numericRanks];

    if (!best || compareSortKeys(sortKey, best.sortKey) > 0) {
      best = { evaluated, sortKey };
    }
  }

  return best.evaluated;
}

function combinations(arr, k) {
  const result = [];
  const combine = (start, current) => {
    if (current.length === k) {
      result.push([...current]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      combine(i + 1, current);
      current.pop();
    }
  };
  combine(0, []);
  return result;
}

function evaluateHand(cards) {
  const values = cards.map((c) => c.value);
  const suits = cards.map((c) => c.suit);
  const valueCounts = {};
  values.forEach((v) => (valueCounts[v] = (valueCounts[v] || 0) + 1));
  const counts = Object.values(valueCounts).sort((a, b) => b - a);
  const uniqueValues = [...new Set(values)].sort((a, b) => b - a);
  const sortedValues = [...values].sort((a, b) => b - a);

  const isFlush = suits.every((s) => s === suits[0]);
  const uniqueSorted = [...new Set(values)].sort((a, b) => a - b);
  const isStraight =
    uniqueSorted.length === 5 && uniqueSorted[4] - uniqueSorted[0] === 4;
  if (isFlush && isStraight) {
    const straightFlushRanks = uniqueSorted
      .slice()
      .reverse()
      .map((v) => cards.find((c) => c.value === v).rank);
    return { type: "straight-flush", ranks: straightFlushRanks };
  }

  if (counts[0] === 4) {
    const quadEntry = Object.entries(valueCounts).find(([k, v]) => v === 4);
    const kickerEntry = Object.entries(valueCounts).find(([k, v]) => v === 1);
    const quadValue = parseInt(quadEntry[0], 10);
    const kickerValue = parseInt(kickerEntry[0], 10);
    const quadRank = cards.find((c) => c.value === quadValue).rank;
    const kickerRank = cards.find((c) => c.value === kickerValue).rank;
    return { type: "four-of-a-kind", ranks: [quadRank, kickerRank] };
  }

  if (counts[0] === 3 && counts[1] === 2) {
    const tripletEntry = Object.entries(valueCounts).find(([k, v]) => v === 3);
    const pairEntry = Object.entries(valueCounts).find(([k, v]) => v === 2);
    const tripletValue = parseInt(tripletEntry[0], 10);
    const pairValue = parseInt(pairEntry[0], 10);
    const tripletRank = cards.find((c) => c.value === tripletValue).rank;
    const pairRank = cards.find((c) => c.value === pairValue).rank;
    return { type: "full house", ranks: [tripletRank, pairRank] };
  }

  if (isFlush) {
    const sortedCards = [...cards].sort((a, b) => b.value - a.value);
    const ranks = sortedCards.map((c) => c.rank);
    return { type: "flush", ranks: ranks.slice(0, 5) };
  }

  if (isStraight) {
    const straightRanks = uniqueSorted
      .slice()
      .reverse()
      .map((v) => cards.find((c) => c.value === v).rank);
    return { type: "straight", ranks: straightRanks };
  }

  if (counts[0] === 3) {
    const tripletEntry = Object.entries(valueCounts).find(([k, v]) => v === 3);
    const tripletValue = parseInt(tripletEntry[0], 10);
    const tripletRank = cards.find((c) => c.value === tripletValue).rank;
    const others = uniqueValues
      .filter((v) => v !== tripletValue)
      .sort((a, b) => b - a);
    const kickerRanks = others
      .map((v) => cards.find((c) => c.value === v).rank)
      .slice(0, 2);
    return { type: "three-of-a-kind", ranks: [tripletRank, ...kickerRanks] };
  }

  if (counts[0] === 2 && counts[1] === 2) {
    const pairs = Object.entries(valueCounts)
      .filter(([k, v]) => v === 2)
      .map(([k]) => parseInt(k, 10))
      .sort((a, b) => b - a);
    const highPairValue = pairs[0];
    const lowPairValue = pairs[1];
    const kickerEntry = Object.entries(valueCounts).find(([k, v]) => v === 1);
    const kickerValue = parseInt(kickerEntry[0], 10);
    const highPairRank = cards.find((c) => c.value === highPairValue).rank;
    const lowPairRank = cards.find((c) => c.value === lowPairValue).rank;
    const kickerRank = cards.find((c) => c.value === kickerValue).rank;
    return { type: "two pair", ranks: [highPairRank, lowPairRank, kickerRank] };
  }

  if (counts[0] === 2) {
    const pairEntry = Object.entries(valueCounts).find(([k, v]) => v === 2);
    const pairValue = parseInt(pairEntry[0], 10);
    const pairRank = cards.find((c) => c.value === pairValue).rank;
    const others = uniqueValues
      .filter((v) => v !== pairValue)
      .sort((a, b) => b - a);
    const kickerRanks = others
      .map((v) => cards.find((c) => c.value === v).rank)
      .slice(0, 3);
    return { type: "pair", ranks: [pairRank, ...kickerRanks] };
  }

  const highCardRanks = sortedValues
    .map((v) => cards.find((c) => c.value === v).rank)
    .slice(0, 5);
  return { type: "nothing", ranks: highCardRanks };
}

function compareSortKeys(a, b) {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const aVal = a[i] || 0;
    const bVal = b[i] || 0;
    if (aVal > bVal) return 1;
    if (aVal < bVal) return -1;
  }
  return 0;
}