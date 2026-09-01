function encryptor(key, message) {
    key = key % 26;
​
    return message
        .split('')
        .map(char => {
            if (char >= 'a' && char <= 'z') {
                return String.fromCharCode(
                    (char.charCodeAt(0) - 97 + key + 26) % 26 + 97
                );
            }
​
            if (char >= 'A' && char <= 'Z') {
                return String.fromCharCode(
                    (char.charCodeAt(0) - 65 + key + 26) % 26 + 65
                );
            }
​
            return char;
        })
        .join('');
}