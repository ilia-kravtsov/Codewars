function encode(text) {
  return [...text]
    .map(ch =>
      ch.charCodeAt(0)
        .toString(2)
        .padStart(8, "0")
        .split("")
        .map(bit => bit.repeat(3))
        .join("")
    )
    .join("");
}

function decode(bits) {
  let corrected = "";

  for (let i = 0; i < bits.length; i += 3) {
    const triple = bits.slice(i, i + 3);
    const ones = [...triple].filter(b => b === "1").length;
    corrected += ones >= 2 ? "1" : "0";
  }

  let text = "";

  for (let i = 0; i < corrected.length; i += 8) {
    const byte = corrected.slice(i, i + 8);
    text += String.fromCharCode(parseInt(byte, 2));
  }

  return text;
}