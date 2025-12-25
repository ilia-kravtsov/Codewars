function findSpecialIdx(vms) {
  let expectedWeight = 0;
​
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j <= i; j++) {
      vms[i].vend();
    }
    expectedWeight += (i + 1) * 100;
  }
​
  const actualWeight = vms.weigh();
  return actualWeight - expectedWeight - 1;
}
​