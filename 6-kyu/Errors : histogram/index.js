function hist(s) {
    const errors = ['u', 'w', 'x', 'z'];
    const result = [];
​
    for (let letter of errors) {
        const count = [...s].filter(char => char === letter).length;
​
        if (count > 0) {
            result.push(
                `${letter}  ${String(count).padEnd(6, ' ')}${'*'.repeat(count)}`
            );
        }
    }
​
    return result.join('\r');
}