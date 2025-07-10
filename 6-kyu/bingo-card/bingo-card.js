function getCard() {
    function getShuffledNumbers(start, end, count) {
        const numbers = [];
        for (let i = start; i <= end; i++) {
            numbers.push(i);
        }
        for (let i = numbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }
        return numbers.slice(0, count);
    }
​
    const bNumbers = getShuffledNumbers(1, 15, 5);
    const iNumbers = getShuffledNumbers(16, 30, 5);
    const nNumbers = getShuffledNumbers(31, 45, 4);
    const gNumbers = getShuffledNumbers(46, 60, 5);
    const oNumbers = getShuffledNumbers(61, 75, 5);
​
    const card = [];
    bNumbers.forEach(num => card.push(`B${num}`));
    iNumbers.forEach(num => card.push(`I${num}`));
    nNumbers.forEach(num => card.push(`N${num}`));
    gNumbers.forEach(num => card.push(`G${num}`));
    oNumbers.forEach(num => card.push(`O${num}`));
​
    return card;
}