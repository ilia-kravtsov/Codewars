function rotate(str) {
    let result = [];
    for (let i = 1; i <= str.length; i++) {
        result.push(str.slice(i) + str.slice(0, i));
    }
    return result;
}