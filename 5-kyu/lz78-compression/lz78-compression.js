function encoder(data) {
  const dict = new Map([['', 0]]);
  let nextIndex = 1;
  let i = 0;
  let out = '';
​
  while (i < data.length) {
    let cur = '';
    let index = 0;
    let j = i;
​
    while (j < data.length && dict.has(cur + data[j])) {
      cur += data[j];
      index = dict.get(cur);
      j++;
    }
​
    if (j === data.length) {
      out += String(index);
      break;
    }
​
    const entry = cur + data[j];
    out += String(index) + data[j];
    dict.set(entry, nextIndex++);
    i = j + 1;
  }
​
  return out;
}
​
function decoder(data) {
  const dict = [''];
  let i = 0;
  let out = '';
​
  while (i < data.length) {
    let j = i;
    while (j < data.length && data[j] >= '0' && data[j] <= '9') j++;
​
    const index = Number(data.slice(i, j));
​
    if (j === data.length) {
      out += dict[index];
      break;
    }
​
    const entry = dict[index] + data[j];
    out += entry;
    dict.push(entry);
    i = j + 1;
  }
​
  return out;
}