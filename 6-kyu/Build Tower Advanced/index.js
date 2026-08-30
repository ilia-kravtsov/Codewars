function towerBuilder(nFloors, nBlockSz) {
  const [blockWidth, blockHeight] = nBlockSz;
  const tower = [];
​
  for (let floor = 0; floor < nFloors; floor++) {
    const stars = '*'.repeat(blockWidth * (2 * floor + 1));
​
    const spaces = ' '.repeat(
      blockWidth * (nFloors - floor - 1)
    );
​
    for (let h = 0; h < blockHeight; h++) {
      tower.push(spaces + stars + spaces);
    }
  }
​
  return tower;
}