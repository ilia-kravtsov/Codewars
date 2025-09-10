var flapDisplay = function(lines, rotors) {
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789";
  return lines.map((line, i) => {
    let result = "";
    let sum = 0;
    for (let j = 0; j < line.length; j++) {
      sum += rotors[i][j];
      let pos = (ALPHABET.indexOf(line[j]) + sum) % ALPHABET.length;
      result += ALPHABET[pos];
    }
    return result;
  });
}