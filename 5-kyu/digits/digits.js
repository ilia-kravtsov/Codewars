let ALL, ALL_IDS, SCORES, N, state;
​
function init() {
  if (ALL) return;
​
  ALL = [];
​
  for (let a = 0; a < 10; a++)
    for (let b = 0; b < 10; b++)
      for (let c = 0; c < 10; c++)
        for (let d = 0; d < 10; d++)
          if (new Set([a, b, c, d]).size === 4)
            ALL.push([a, b, c, d]);
​
  N = ALL.length;
  ALL_IDS = Array.from({ length: N }, (_, i) => i);
  SCORES = new Uint8Array(N * N);
​
  for (let i = 0; i < N; i++) {
    const x = ALL[i];
​
    for (let j = 0; j < N; j++) {
      const y = ALL[j];
      let s = 0;
​
      if (x[0] === y[0]) s++;
      if (x[1] === y[1]) s++;
      if (x[2] === y[2]) s++;
      if (x[3] === y[3]) s++;
​
      SCORES[i * N + j] = s;
    }
  }
}
​
function game(matches) {
  init();
​
  if (matches === -1 || !state) {
    state = {
      candidates: ALL_IDS.slice(),
      last: 0
    };
​
    return ALL[0].slice();
  }
​
  state.candidates = state.candidates.filter(
    x => SCORES[state.last * N + x] === matches
  );
​
  if (state.candidates.length === 1) {
    state.last = state.candidates[0];