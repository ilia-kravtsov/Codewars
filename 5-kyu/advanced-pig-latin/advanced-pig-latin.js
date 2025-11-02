function translate(sentence) {
  const vowels = /[aeiou]/i;
  return sentence
    .split(/(\s+)/)
    .map(word => {
      if (/^\d+$/.test(word)) return word;
      const match = word.match(/^([a-z]+)([^a-z]*)$/i);
      if (!match) return word;
      let [, core, punct] = match;
      const isCap = /^[A-Z]/.test(core);
      core = core.toLowerCase();
      const v = core.search(vowels);
      let res = v === 0 ? core + "way" : v > 0 ? core.slice(v) + core.slice(0, v) + "ay" : core + "ay";
      if (isCap) res = res[0].toUpperCase() + res.slice(1);
      return res + punct;
    })
    .join("");
}
​