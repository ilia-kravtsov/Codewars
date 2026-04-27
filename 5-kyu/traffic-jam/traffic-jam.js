var trafficJam = function (mainRoad, sideStreets) {
  const road = mainRoad.split("");
​
  for (let i = sideStreets.length - 1; i >= 0; i--) {
    const street = sideStreets[i];
​
    for (let j = 0; j < street.length; j++) {
      road.splice(i + 1 + j * 2, 0, street[street.length - 1 - j]);
    }
  }
​
  return road.slice(0, road.indexOf("X") + 1).join("");
};