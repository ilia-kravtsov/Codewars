function poohbear(s) {
  const mem = new Map();
  let p = 0;
  let copy = 0;
  let out = '';
  const get = i => mem.get(i) ?? 0;
  const set = (i, v) => mem.set(i, ((Math.floor(v) % 256) + 256) % 256);
​
  const stack = [];
  const jump = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'W') stack.push(i);
    if (s[i] === 'E') {
      const j = stack.pop();
      jump[i] = j;
      jump[j] = i;
    }
  }
​
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '+') set(p, get(p) + 1);
    else if (c === '-') set(p, get(p) - 1);
    else if (c === '>') p++;
    else if (c === '<') p--;
    else if (c === 'c') copy = get(p);
    else if (c === 'p') set(p, copy);
    else if (c === 'P') out += String.fromCharCode(get(p));
    else if (c === 'N') out += get(p);
    else if (c === 'T') set(p, get(p) * 2);
    else if (c === 'Q') set(p, get(p) * get(p));
    else if (c === 'U') set(p, Math.sqrt(get(p)));
    else if (c === 'L') set(p, get(p) + 2);
    else if (c === 'I') set(p, get(p) - 2);
    else if (c === 'V') set(p, get(p) / 2);
    else if (c === 'A') set(p, get(p) + copy);
    else if (c === 'B') set(p, get(p) - copy);
    else if (c === 'Y') set(p, get(p) * copy);
    else if (c === 'D') set(p, copy === 0 ? 0 : get(p) / copy);
    else if (c === 'W' && get(p) === 0) i = jump[i];
    else if (c === 'E' && get(p) !== 0) i = jump[i];
  }
  
  return out;
}
​