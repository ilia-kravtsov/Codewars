/*
No Story

No Description

Only by Thinking and Testing

Look at the results of the testcases, and guess the code!
*/

function testit(arr) {
  const lengthUnits = ["mm", "cm", "dm", "m", "km"];
  const timeUnits = ["ms", "s", "m", "h", "d"];

  const parsed = arr.map((str) => {
    const match = str.match(/(\d+)([a-z]+)/);
    return match ? { value: parseInt(match[1]), unit: match[2] } : null;
  });

  if (parsed.includes(null)) return null;

  const isLength = parsed.every((item) => lengthUnits.includes(item.unit));
  const isTime = parsed.every((item) => timeUnits.includes(item.unit));

  if (!isLength && !isTime) return null;

  const unitScale = isLength ? lengthUnits : timeUnits;

  return arr.sort((a, b) => {
    const [valA, unitA] = [parseInt(a), a.match(/[a-z]+/)[0]];
    const [valB, unitB] = [parseInt(b), b.match(/[a-z]+/)[0]];

    const unitAIndex = unitScale.indexOf(unitA);
    const unitBIndex = unitScale.indexOf(unitB);

    return unitAIndex === unitBIndex ? valA - valB : unitAIndex - unitBIndex;
  });
}
