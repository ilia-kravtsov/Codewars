var bowlingScore = function(rolls) {
  let score = 0;
  let frameIndex = 0;
​
  for (let frame = 0; frame < 10; frame++) {
    if (rolls[frameIndex] === 10) {
      score += 10 + rolls[frameIndex + 1] + rolls[frameIndex + 2];
      frameIndex += 1;
    } else if (rolls[frameIndex] + rolls[frameIndex + 1] === 10) {
      score += 10 + rolls[frameIndex + 2];
      frameIndex += 2;
    } else {
      score += rolls[frameIndex] + rolls[frameIndex + 1];
      frameIndex += 2;
    }
  }
​
  return score;
};
​