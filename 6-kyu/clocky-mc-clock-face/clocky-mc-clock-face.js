var whatTimeIsIt = function(angle) {
  let totalHours = angle / 30;
  let hours = Math.floor(totalHours) % 12;
  hours = hours === 0 ? 12 : hours;
  let remainingDegrees = angle % 30;
  let minutes = Math.floor(remainingDegrees * 2);
  let formattedHours = hours.toString().padStart(2, '0');
  let formattedMinutes = minutes.toString().padStart(2, '0');
  return `${formattedHours}:${formattedMinutes}`;
};