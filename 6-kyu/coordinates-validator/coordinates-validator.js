function isValidCoordinates(coordinates) {
  const regex = /^\s*(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)\s*$/;
  const match = coordinates.match(regex);
  if (!match) return false;
​
  const lat = parseFloat(match[1]);
  const lon = parseFloat(match[3]);
​
  return Math.abs(lat) <= 90 && Math.abs(lon) <= 180;
}