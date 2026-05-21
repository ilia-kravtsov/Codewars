function theOrderOf(ribbons) {
  if (typeof ribbons === "string") {
    ribbons = ribbons.trim().split(/\n/);
  }
​
  const pos = new Map();
​
  for (let r = 0; r < 11; r++) {
    for (let c = 0; c < 11; c++) {
      const ch = ribbons[r][c];
      if (ch !== ".") {
        if (!pos.has(ch)) pos.set(ch, []);
        pos.get(ch).push([r, c]);
      }
    }
  }
​
  const info = new Map();
​
  for (const [d, cells] of pos) {
    const rows = new Set(cells.map(x => x[0]));
    const cols = new Set(cells.map(x => x[1]));
​
    if (rows.size === 1) {
      info.set(d, { dir: "H", line: cells[0][0] });
    } else {
      info.set(d, { dir: "V", line: cells[0][1] });
    }
  }
​
  const digits = [...info.keys()];
  const graph = new Map();
  const indeg = new Map();
​