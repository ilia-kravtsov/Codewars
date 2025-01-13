/*
The term "affine" was introduced to mathematics by Leonhard Euler in 1748. It comes from the Latin word affinis meaning "related." An affine transformation preserves the ratios of distances between points on a straight line. I.e. if you seek to generalize the concept, think of the characters of your alphabet as points on a straight line.

The Affine Cipher is a monoalphabetic cipher that is slightly stronger than a Caesar Cipher. Given the modern alphabet, the Caesar Cipher has 26 possible keys, while the Affine Cipher has 312 possible keys. The Affine Cipher maps to the Caesar Cipher when a = 1, and the Atbash Cipher when a = b = m - 1.

There are four factors that go into the cipher:

x, the position in the alphabet of the current letter
a, a number that must be coprime with the length of the alphabet (i.e. gcd(a, m) = 1)
b, an non-negative integer
m, the length of the alphabet
The formula (a * x + b) % m evaluates to the position of the letter in the alphabet to substitute.

Write a class that provides encode and decode methods for the Affine Cipher.

Note: Your constructor must throw an error if a is not coprime with m.

The function gcd has been provided to give you the greatest common denominator of two numbers. E.g. gcd(2, 4) == 2
*/

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function modInverse(a, m) {
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) return x;
  }
  throw new Error("No modular inverse exists");
}

function AffineCipher(abc, a, b) {
  const m = abc.length;

  if (gcd(a, m) !== 1) {
    throw new Error("a must be coprime with the length of the alphabet");
  }

  this.encode = function (str) {
    return str
      .split("")
      .map((char) => {
        const x = abc.indexOf(char);
        if (x === -1) return char; 
        const encodedPos = (a * x + b) % m;
        return abc[encodedPos];
      })
      .join("");
  };

  this.decode = function (str) {
    const aInverse = modInverse(a, m); 
    return str
      .split("")
      .map((char) => {
        const y = abc.indexOf(char);
        if (y === -1) return char;
        const decodedPos = (aInverse * (y - b + m)) % m;
        return abc[decodedPos];
      })
      .join("");
  };
}