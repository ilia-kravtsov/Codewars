function satNav(directions) {
  if (typeof directions === "string") {
    directions = directions.split(/\r?\n/).filter(Boolean);
  }
​
  let x = 0; 
  let y = 0; 
​
  let h = 0;
​
  const setHeading = (dir) => {
    if (dir === "NORTH") h = 0;
    else if (dir === "EAST") h = 1;
    else if (dir === "SOUTH") h = 2;
    else if (dir === "WEST") h = 3;
  };
​
  const moveUnits = (u) => {
    if (h === 0) y += u;
    else if (h === 1) x += u;
    else if (h === 2) y -= u;
    else x -= u;
  };
​
  const axisValue = () => (h === 0 || h === 2 ? y : x);
​
  const moveToNthIntersectionAhead = (n) => {
    const a = axisValue();
    const step = h === 0 || h === 1 ? 1 : -1;
​
    let next;
    if (step > 0) {