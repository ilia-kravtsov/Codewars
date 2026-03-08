function rainVolume(towers) {
  let left = 0;
  let right = towers.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;
​
  while (left < right) {
    if (towers[left] <= towers[right]) {
      leftMax = Math.max(leftMax, towers[left]);
      water += leftMax - towers[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, towers[right]);
      water += rightMax - towers[right];
      right--;
    }
  }
​
  return water;
}