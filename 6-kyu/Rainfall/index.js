/*
dataand data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.

data and towns can be seen in "Your Test Cases:".

Task:
function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.
Examples:
mean("London", data), 51.19(9999999999996) 
variance("London", data), 57.42(833333333374)
Notes:
if functions mean or variance have as parameter town a city which has no records return -1 or -1.0 (depending on the language)

Don't truncate or round: the tests will pass if abs(your_result - test_result) <= 1e-2 or abs((your_result - test_result) / test_result) <= 1e-6 depending on the language.

Shell

Shell tests only variance.
In "function "variance" $1 is "data", $2 is "town".
*/

function mean(town, strng) {
  const townData = getTownData(town, strng);
  if (!townData) return -1;

  const rainfallValues = townData
    .split(",")
    .map((monthData) => parseFloat(monthData.split(" ")[1]));
  const totalRainfall = rainfallValues.reduce((sum, value) => sum + value, 0);
  return totalRainfall / rainfallValues.length;
}

function variance(town, strng) {
  const townData = getTownData(town, strng);
  if (!townData) return -1;

  const rainfallValues = townData
    .split(",")
    .map((monthData) => parseFloat(monthData.split(" ")[1]));
  const meanValue = mean(town, strng);
  const varianceValue =
    rainfallValues.reduce(
      (sum, value) => sum + Math.pow(value - meanValue, 2),
      0
    ) / rainfallValues.length;
  return varianceValue;
}

function getTownData(town, strng) {
  const towns = strng.split("\n");
  for (let i = 0; i < towns.length; i++) {
    if (towns[i].startsWith(town + ":")) {
      return towns[i].split(":")[1];
    }
  }
  return null;
}
