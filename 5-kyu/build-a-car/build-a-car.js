​
  const placeFront = () => {
    for (let i = innerLen - 2; i >= 0; i--) {
      if (inner[i] === " " && inner[i + 1] === " ") {
        inner[i] = "[";
        inner[i + 1] = "]";
        return true;
      }
    }
    return false;
  };
​
  for (let i = 0; i < doors; i++) {
    const ok = i % 2 === 0 ? placeFront() : placeRear();
    if (!ok) throw new Error("Too many doors");
  }
​
  const middle = "|" + inner.join("") + "\\" + "\n";
​
  const extra = length < 12 ? 0 : Math.floor((length - 12) / 2) + 1;
  const rearExtra = Math.floor((extra + 1) / 2);
  const frontExtra = Math.floor(extra / 2);
​
  const rearCount = 1 + rearExtra;
  const frontCount = 1 + frontExtra;
​
  const base = Array(length - 1).fill("-");
  for (let k = 0; k < rearCount; k++) base[1 + 2 * k] = "o";
  for (let k = 0; k < frontCount; k++) base[(length - 3) - 2 * k] = "o";
​
  const bottom = base.join("") + "'";
​
  this.body = { component: top + middle };
  this.chassis = { component: bottom };
}
​