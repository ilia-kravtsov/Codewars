function stray(numbers) {
    const first = numbers[0];
    const second = numbers[1];
    const third = numbers[2];
  
    const repeated = first === second ? first : first === third ? first : second;
  
    return numbers.find(value => value !== repeated);
}
​
/*
function stray(numbers) {
    const numbersStore = {};
​
    for (let i = 0; i < numbers.length; i++) {
        if (!Object.hasOwn(numbersStore, numbers[i])) {
            if (i >= 2) return numbers[i];
            numbersStore[numbers[i]] = 1;
        } else {
            numbersStore[numbers[i]]++
        }
    }
​
    for (let key in numbersStore) {
        if (numbersStore[key] === 1) {
            return +key;
        }
    }
}
*/