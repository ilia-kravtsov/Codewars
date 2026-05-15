function encode(alphabet, input) {
  const isString = typeof alphabet === "string";
​
  const abc = isString ? alphabet.split("") : alphabet.slice();
  const data = isString ? input.split("") : input.slice();
​
  const result = [];
​
  for (const item of data) {
    const index = abc.indexOf(item);
​
    if (index === -1) return null;
​
    result.push(index);
​
    const [value] = abc.splice(index, 1);
    abc.unshift(value);
  }
​
  return result;
}
​
function decode(alphabet, input) {
  const isString = typeof alphabet === "string";
​
  const abc = isString ? alphabet.split("") : alphabet.slice();
  const result = [];
​
  for (const index of input) {
    if (
      typeof index !== "number" ||
      index < 0 ||
      index >= abc.length ||
      index % 1 !== 0
    ) {
      return null;
    }
​
    const value = abc[index];
    result.push(value);
​
    abc.splice(index, 1);
    abc.unshift(value);
  }
​
  return isString ? result.join("") : result;
}