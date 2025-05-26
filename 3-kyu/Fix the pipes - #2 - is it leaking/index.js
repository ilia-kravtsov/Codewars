/*
Introduction
The goal of this kata is to check whether a network of water pipes is leaking anywhere.

Task
Create a function which accepts a map input and validates if water is leaking anywhere. In case water is leaking return false. In case the pipe network is correct -- i.e. there are no leaks anywhere -- return true.

There can be multiple water sources. All pipes which are directed outside of the map are connected to a water source, and you need to check them for leaks.

For example, in the map below:

     ╋━━┓
     ┃..┃
     ┛..┣
     
The water sources (marked with +) are:           
     +
   + ╋━━┓
     ┃..┃
   + ┛..┣ +
        +

This map shows a correct pipe network. It's not leaking anywhere.
A leaking pipeline example :

The leak is marked by the arrow pointing to the top left-hand corner of the map:

 --> ...┏ +
     ┃..┃
   + ┛..┣ +
        +

A leak may involve a pipe pointing to an empty cell in the map, like this: ━━.. It may also involve a pipe pointing to another pipe that does not point back, like this: ━━┗

There can be also 'old pipes` on the map which are not connected to water sources. You should ignore such pipes.

    ....
    .┛┛.
    ....
There are two old pipes not connected to a water source. Water is not leaking, so the function should return true.

Leaking.png

Notes
Check the test cases for more samples
Unicode UTF-8 characters used for pipes:
┗ - 9495 - BOX DRAWINGS HEAVY UP AND RIGHT
┓ - 9491 - BOX DRAWINGS HEAVY DOWN AND LEFT
┏ - 9487 - BOX DRAWINGS HEAVY DOWN AND RIGHT
┛ - 9499 - BOX DRAWINGS HEAVY UP AND LEFT
━ - 9473 - BOX DRAWINGS HEAVY HORIZONTAL
┃ - 9475 - BOX DRAWINGS HEAVY VERTICAL
┣ - 9507 - BOX DRAWINGS HEAVY VERTICAL AND RIGHT
┫ - 9515 - BOX DRAWINGS HEAVY VERTICAL AND LEFT
┳ - 9523 - BOX DRAWINGS HEAVY DOWN AND HORIZONTAL
┻ - 9531 - BOX DRAWINGS HEAVY UP AND HORIZONTAL
╋ - 9547 - BOX DRAWINGS HEAVY VERTICAL AND HORIZONTAL
*/

function checkPipe(map) {
  const rows = map.length;
  if (rows === 0) return true;
  const cols = map[0].length;

  const pipeOpenings = {
    "━": [
      [-1, 0],
      [1, 0],
    ],
    "┃": [
      [0, -1],
      [0, 1],
    ],
    "┏": [
      [1, 0],
      [0, 1],
    ],
    "┓": [
      [-1, 0],
      [0, 1],
    ],
    "┛": [
      [-1, 0],
      [0, -1],
    ],
    "┗": [
      [1, 0],
      [0, -1],
    ],
    "┣": [
      [0, -1],
      [0, 1],
      [1, 0],
    ],
    "┫": [
      [0, -1],
      [0, 1],
      [-1, 0],
    ],
    "┳": [
      [-1, 0],
      [1, 0],
      [0, 1],
    ],
    "┻": [
      [-1, 0],
      [1, 0],
      [0, -1],
    ],
    "╋": [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ],
  };

  function opposite(dir) {
    return [-dir[0], -dir[1]];
  }

  function inBounds(c, r) {
    return c >= 0 && c < cols && r >= 0 && r < rows;
  }

  const active = new Set();

  function key(c, r) {
    return `${r},${c}`;
  }

  const queue = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const ch = map[r][c];
      if (!(ch in pipeOpenings)) continue;
      const openings = pipeOpenings[ch];
      let isSource = false;
      for (const [dx, dy] of openings) {
        const nc = c + dx,
          nr = r + dy;
        if (!inBounds(nc, nr)) {
          isSource = true;
          break;
        }
      }
      if (isSource) {
        active.add(key(c, r));
        queue.push([c, r]);
      }
    }
  }

  while (queue.length) {
    const [c, r] = queue.shift();
    const ch = map[r][c];
    const openings = pipeOpenings[ch];
    for (const [dx, dy] of openings) {
      const nc = c + dx,
        nr = r + dy;
      if (inBounds(nc, nr)) {
        const neighborCh = map[nr][nc];
        if (!(neighborCh in pipeOpenings)) continue;
        const neighborOpenings = pipeOpenings[neighborCh];
        const opp = opposite([dx, dy]);
        const connectsBack = neighborOpenings.some(
          ([odx, ody]) => odx === opp[0] && ody === opp[1]
        );
        if (connectsBack) {
          const keyNeighbor = key(nc, nr);
          if (!active.has(keyNeighbor)) {
            active.add(keyNeighbor);
            queue.push([nc, nr]);
          }
        }
      }
    }
  }

  for (const pos of active) {
    const [r, c] = pos.split(",").map(Number);
    const ch = map[r][c];
    const openings = pipeOpenings[ch];
    for (const [dx, dy] of openings) {
      const nc = c + dx,
        nr = r + dy;
      if (inBounds(nc, nr)) {
        const neighborCh = map[nr][nc];
        if (!(neighborCh in pipeOpenings)) return false;
        const neighborOpenings = pipeOpenings[neighborCh];
        const opp = opposite([dx, dy]);
        const connectsBack = neighborOpenings.some(
          ([odx, ody]) => odx === opp[0] && ody === opp[1]
        );
        if (!connectsBack) return false;
      }
    }
  }

  return true;
}