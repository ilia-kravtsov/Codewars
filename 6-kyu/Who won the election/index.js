function getWinner(listOfBallots) {
  const votes = {};
  const majority = listOfBallots.length / 2;

  for (const name of listOfBallots) {
    votes[name] = (votes[name] || 0) + 1;

    if (votes[name] > majority) {
      return name;
    }
  }

  return null;
}