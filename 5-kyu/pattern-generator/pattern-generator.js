function patternGenerator(n) {
  if (n <= 0) return "";
​
  const alt = (len, start = "x") => {
    let s = [];
    for (let i = 0; i < len; i++) {
      s.push(i % 2 ? (start === "x" ? "o" : "x") : start);
    }
    return s.join(" ");
  };
​
  const res = [];
​
  for (let i = 1; i < n; i++) {
    const k = Math.ceil(i / 2);
    const pad = n - 1 + (i % 2 === 0);
    res.push(" ".repeat(pad) + alt(k, k % 2 ? "x" : "o"));
  }
​
  if (n % 2) {
    res.push(alt(n));
  } else {
    const half = [];
    for (let i = 0; i < n / 2; i++) half.push(i % 2 ? "o" : "x");
    res.push(half.concat([...half].reverse()).join(" "));
  }
​
  for (let i = 1; i < n; i++) {
    const k = Math.floor((n - i + 1) / 2);
    res.push(" ".repeat(i) + alt(k));
  }
​
  return res.join("\n");
}