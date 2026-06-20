function caesarSort(a) {
    if (a.length === 0) return [];
    if (a.length <= 1) return [a];

    function shiftString(str, shift) {
        return str.split('').map(char => {
            const code = char.charCodeAt(0) - 97;
            const shifted = (code + shift + 26) % 26;
            return String.fromCharCode(shifted + 97);
        }).join('');
    }

    function getNormalized(str) {
        if (str.length === 0) return str;
        const firstCharShift = (str.charCodeAt(0) - 97 + 26) % 26;
        const shift = (26 - firstCharShift) % 26;
        return shiftString(str, shift);
    }

    const groups = {};
    for (const str of a) {
        const normalized = getNormalized(str);
        if (!groups[normalized]) {
            groups[normalized] = [];
        }
        groups[normalized].push(str);
    }

    return Object.values(groups);
}