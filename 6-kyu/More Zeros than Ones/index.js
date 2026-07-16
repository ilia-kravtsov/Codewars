function moreZeros(s) {
  const result = [];

  for (const char of s) {
    if (result.includes(char)) continue;

    const binary = char.charCodeAt(0).toString(2);

    let ones = 0;
    for (const bit of binary) {
      if (bit === '1') ones++;
    }

    const zeros = binary.length - ones;

    if (zeros > ones) {
      result.push(char);
    }
  }

  return result;
}