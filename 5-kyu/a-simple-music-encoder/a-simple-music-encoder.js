function compress(music) {
  const out = [];
  let i = 0;
​
  while (i < music.length) {
    let j = i + 1;
​
    while (j < music.length && music[j] === music[j - 1]) j++;
    if (j - i >= 2) {
      out.push(music[i] + '*' + (j - i));
      i = j;
      continue;
    }
​
    if (i + 2 < music.length) {
      let d1 = music[i + 1] - music[i];
      let d2 = music[i + 2] - music[i + 1];
​
      if (d1 === d2 && Math.abs(d1) === 1) {
        j = i + 2;
        while (j + 1 < music.length && music[j + 1] - music[j] === d1) j++;
        out.push(music[i] + '-' + music[j]);
        i = j + 1;
        continue;
      }
​
      if (d1 === d2 && Math.abs(d1) > 1) {
        j = i + 2;
        while (j + 1 < music.length && music[j + 1] - music[j] === d1) j++;
        out.push(music[i] + '-' + music[j] + '/' + Math.abs(d1));
        i = j + 1;
        continue;
      }
    }
​
    out.push(String(music[i]));
    i++;
  }
​
  return out.join(',');
}
​