function adaNumber(line) {
  const s = line.replace(/_/g, "");
​
  if (/^\d+$/.test(s)) return true;
​
  const match = s.match(/^(\d+)#([0-9a-fA-F]+)#$/);
  if (!match) return false;
​
  const base = Number(match[1]);
  if (base < 2 || base > 16) return false;
​
  for (const ch of match[2]) {
    if (parseInt(ch, 16) >= base) return false;
  }
​
  return true;
}