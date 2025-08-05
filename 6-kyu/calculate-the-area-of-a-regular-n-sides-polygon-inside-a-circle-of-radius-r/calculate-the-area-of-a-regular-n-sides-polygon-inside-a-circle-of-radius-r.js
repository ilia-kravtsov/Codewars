function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  const angle = (2 * Math.PI) / numberOfSides;
  const area = 0.5 * numberOfSides * Math.pow(circleRadius, 2) * Math.sin(angle);
  return +area.toFixed(3); 
}