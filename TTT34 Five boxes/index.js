function heaviestBox(weightOfEachTwoBoxes){
    weightOfEachTwoBoxes.sort((a,b) => a - b);

    let min1 = weightOfEachTwoBoxes[0];
    let min2 = weightOfEachTwoBoxes[1];
    let max1 = weightOfEachTwoBoxes[9];
    let max2 = weightOfEachTwoBoxes[8];

    let totalSum = weightOfEachTwoBoxes.reduce((acc, val) => acc + val, 0);
    let totalWeight = totalSum / 4;

    let a = min1 + min2 + max1 - totalWeight;
    let c = min2 - a;
    let d = c + (max1 - max2);
    let e = max1 - d;

    return e;
}