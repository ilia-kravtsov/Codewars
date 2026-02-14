function findLongest(str) {
  let max = 0;
  let left = 0, right = 0;
​
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === 40) left++;      
    else right++;                               
​
    if (right > left) {
      left = right = 0;
    } else if (left === right) {
      const len = right << 1;
      if (len > max) max = len;
    }
  }
​
  left = right = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str.charCodeAt(i) === 40) left++;
    else right++;
​
    if (left > right) {
      left = right = 0;
    } else if (left === right) {
      const len = left << 1;
      if (len > max) max = len;
    }
  }
​
  return max;
}
​