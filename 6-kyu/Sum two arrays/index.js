function addArrays(array1, array2) {
    if (!array1.length && !array2.length) return [];

    const a = parseInt(array1.join('') || '0');
    const b = parseInt(array2.join('') || '0');

    const sum = String(a + b);

    if (sum[0] === '-') {
        return [
            -Number(sum[1]),
            ...sum.slice(2).split('').map(Number)
        ];
    }

    return sum.split('').map(Number);
}