function mostFrequentDays(year) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const firstDay = new Date(year, 0, 1).getDay();
  const leap =
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 400 === 0);

  if (!leap) {
    return [days[firstDay]];
  }

  const secondDay = (firstDay + 1) % 7;

  return week.filter(day =>
    day === days[firstDay] || day === days[secondDay]
  );
}