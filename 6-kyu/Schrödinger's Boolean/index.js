let count = 0;
const omnibool = {
  valueOf() {
    count++;
    return count === 1;
  }
};