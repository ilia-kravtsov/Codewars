/*
A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

Write a function that computes the nth smallest Hamming number.

Specifically:

The first smallest Hamming number is 1 = 203050
The second smallest Hamming number is 2 = 213050
The third smallest Hamming number is 3 = 203150
The fourth smallest Hamming number is 4 = 223050
The fifth smallest Hamming number is 5 = 203051
The 20 smallest Hamming numbers are given in the Example test fixture.

Your code should be able to compute the first 5 000 ( LC: 400, Clojure: 2 000, Haskell: 12 691, NASM, C, D, C++, Go and Rust: 13 282 ) Hamming numbers without timing out.
*/

function hamming(n) {
  if (n <= 0) return undefined;
  const h = new Array(n);
  h[0] = 1;
  
  let i2 = 0, i3 = 0, i5 = 0;
  
  for (let i = 1; i < n; i++) {
    const next2 = h[i2] * 2;
    const next3 = h[i3] * 3;
    const next5 = h[i5] * 5;
    const next = Math.min(next2, next3, next5);
    h[i] = next;
    
    if (next === next2) i2++;
    if (next === next3) i3++;
    if (next === next5) i5++;
  }
  
  return h[n - 1];
}
