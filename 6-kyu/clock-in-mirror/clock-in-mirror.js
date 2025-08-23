function WhatIsTheTime(timeInMirror) {
    let [h, m] = timeInMirror.split(":").map(Number);
​
    let realM = (60 - m) % 60;
​
    let realH = 11 - h + (m === 0 ? 1 : 0);
    realH = (realH + 12) % 12;
    if (realH === 0) realH = 12;
​
    return `${String(realH).padStart(2, "0")}:${String(realM).padStart(2, "0")}`;
}