function schedule(movies) {
  movies.sort((a, b) => a.end - b.end);
​
  let count = 0;
  let lastEnd = -Infinity;
​
  for (const movie of movies) {
    if (movie.start > lastEnd) {
      count++;
      lastEnd = movie.end;
    }
  }
​
  return count;
}