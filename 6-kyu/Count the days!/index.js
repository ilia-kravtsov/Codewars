function countDays(d) {
  const today = new Date();
​
  if (d.toDateString() === today.toDateString()) {
    return "Today is the day!";
  }
​
  const difference = d.getTime() - today.getTime();
​
  if (difference < 0) {
    return "The day is in the past!";
  }
​
  const days = Math.round(difference / 86400000);
​
  return `${days} days`;
}