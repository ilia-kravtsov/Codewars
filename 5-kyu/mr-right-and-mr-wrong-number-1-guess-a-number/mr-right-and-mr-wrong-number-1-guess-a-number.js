      return String(n).startsWith(m[1]);
    }
​
    if ((m = text.match(/ending with (\d+)/))) {
      return String(n).endsWith(m[1]);
    }
  };
​
  const checkWrong = (n, text) => {
    let m;
​
    if ((m = text.match(/more than (\d+)/))) {
      return n < Number(m[1]);
    }
​
    if ((m = text.match(/less than (\d+)/))) {
      return n > Number(m[1]);
    }
​
    return !checkRight(n, text);
  };
​
  const result = [];
​
  for (let n = 1; n <= 2000; n++) {
    if (
      right.every(s => checkRight(n, s)) &&
      wrong.every(s => checkWrong(n, s))
    ) {
      result.push(n);
    }
​
    if (result.length > 1) return null;
  }
​
  return result.length === 1 ? result[0] : null;
}