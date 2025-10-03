function encodeStr(s, shift) {
    const firstChar = s[0].toLowerCase();
    const secondChar = shiftChar(firstChar, shift);
    const prefix = firstChar + secondChar;
    
    let encoded = '';
    for (let char of s) {
        encoded += shiftChar(char, shift);
    }
    
    const fullEncoded = prefix + encoded;
    
    return splitIntoFive(fullEncoded);
}
​
function decode(arr) {
    const fullString = arr.join('');
    const prefix = fullString.substring(0, 2);
    const shift = calculateShift(prefix[0], prefix[1]);
    const encodedMessage = fullString.substring(2);
    let decoded = '';
    
    for (let char of encodedMessage) {
        decoded += shiftChar(char, -shift);
    }
    
    return decoded;
}
​
function shiftChar(char, shift) {
    if (char >= 'a' && char <= 'z') {
        const code = char.charCodeAt(0) - 97;
        const shifted = (code + shift + 26) % 26;
        return String.fromCharCode(shifted + 97);