        }
        continue;
      }
​
      const foxesDie = hasAnyBait;
​
      for (const idx of part) {
        const ch = chars[idx];
        if (ch === 'F') {
          res[idx] = foxesDie ? '.' : 'F';
        } else if (ch === 'C') {
          res[idx] = '.';
        }
      }
    }
  }
​
  processArea(outside);
​
  for (const cage of cages) {
    res[cage.start] = '[';
    res[cage.end] = ']';
    processArea(cage.inside);
  }
​
  return res.join('');
};