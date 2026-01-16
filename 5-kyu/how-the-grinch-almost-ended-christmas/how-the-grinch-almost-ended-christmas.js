function prioritizeMissiles(missiles){
  return missiles
    .map((m, i) => ({ name: m.name, t: m.distance / m.speed, i }))
    .sort((a, b) => a.t - b.t || a.i - b.i)
    .map(m => m.name);
}
​