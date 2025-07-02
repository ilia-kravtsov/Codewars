function balance(left, right) {
  const getWeight = str =>
    [...str].reduce((sum, char) => sum + (char === '!' ? 2 : 3), 0);
    
  const leftWeight = getWeight(left);
  const rightWeight = getWeight(right);
​
  if (leftWeight > rightWeight) return "Left";
  if (rightWeight > leftWeight) return "Right";
  return "Balance";
}
​