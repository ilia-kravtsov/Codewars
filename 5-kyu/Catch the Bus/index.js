function catchTheBus(busTimes, boyTimes) {
  const toMinutes = (time) => {
    const [hm, ap] = time.split(" ");
    let [h, m] = hm.split(":").map(Number);

    if (ap === "PM" && h !== 12) h += 12;
    if (ap === "AM" && h === 12) h = 0;

    return h * 60 + m;
  };

  const b1 = toMinutes(busTimes[0]);
  const b2 = toMinutes(busTimes[1]);
  const y1 = toMinutes(boyTimes[0]);
  const y2 = toMinutes(boyTimes[1]);

  const total = (b2 - b1) * (y2 - y1);

  let miss = 0;

  if (b2 <= y1) {
    miss = total;
  } else if (b1 >= y2) {
    miss = 0;
  } else {
    const start = Math.max(b1, y1);
    const end = Math.min(b2, y2);

    if (start > b1) {
      miss += (start - b1) * (y2 - y1);
    }

    if (end > start) {
      miss += ((y2 - start) + (y2 - end)) * (end - start) / 2;
    }
  }

  return miss / total * 100;
}