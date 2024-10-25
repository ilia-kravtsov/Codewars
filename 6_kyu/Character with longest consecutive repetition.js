/*
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
*/
function longestRepetition(s) {
    if (s.length === 0) return ["", 0];

    let maxChar = s[0];
    let maxLength = 1;
    let currentChar = s[0];
    let currentLength = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === currentChar) {
            currentLength++;
        } else {
            if (currentLength > maxLength) {
                maxChar = currentChar;
                maxLength = currentLength;
            }
            currentChar = s[i];
            currentLength = 1;
        }
    }

    if (currentLength > maxLength) {
        maxChar = currentChar;
        maxLength = currentLength;
    }

    return [maxChar, maxLength];
}
