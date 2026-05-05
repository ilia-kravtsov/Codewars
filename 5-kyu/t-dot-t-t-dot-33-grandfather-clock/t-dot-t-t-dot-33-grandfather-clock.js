function howManyTimes(time1, time2) {
  const start = new Date(time1.replace(' ', 'T'));
  const end = new Date(time2.replace(' ', 'T'));
  
  let total = 0;
  let current = new Date(start);
​
  current.setSeconds(0, 0);
​
  while (current < end) {
    const minutes = current.getMinutes();
    const seconds = current.getSeconds();
​
    if (seconds === 0 && (minutes === 0 || minutes === 30)) {
      let strikes = 0;
​
      if (minutes === 0) {
        let h = current.getHours() % 12;
        strikes = h === 0 ? 12 : h;
      } else {
        strikes = 1;
      }
​
      for (let i = 0; i < strikes; i++) {
        let strikeTime = new Date(current);
        strikeTime.setSeconds(i);
​
        if (strikeTime >= start && strikeTime < end) {
          total++;
        }
      }
    }
​
    current.setMinutes(current.getMinutes() + 1);
  }
​
  return total;
}