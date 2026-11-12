​
function longest_2(s1, s2) {
    const result = [];
​
    const alphabet = {
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0,
        h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0,
        o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0,
        v: 0, w: 0, x: 0, y: 0, z: 0
    };
​
    let unitedString = s1 + s2;
​
    for (let i = 0; i < unitedString.length; i++) {
        alphabet[unitedString[i]]++;
    }
​
    for (const key in alphabet) {
        if (alphabet[key] > 0) {
            result.push(key);
        }
    }
​
    return result.join('')
}
​
function longest_3(s1, s2) {
    const letters = new Set(s1 + s2);
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
​
    for (const letter of alphabet) {
        if (letters.has(letter)) {
            result += letter;
        }
    }
​
    return result;
}
​
// tests for longest
for (const { s1, s2, expected } of testCases) {
    console.log(longest(s1, s2) === expected);
}
​
// tests for longest_2
for (const { s1, s2, expected } of testCases) {
    console.log(longest_2(s1, s2) === expected);
}
​
// tests for longest_3
for (const { s1, s2, expected } of testCases) {
    console.log(longest_3(s1, s2) === expected);
}