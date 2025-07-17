function race(v1, v2, g) {
    if (v1 >= v2) return null;
​
    const timeInSeconds = Math.floor((g / (v2 - v1)) * 3600);
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
​
    return [hours, minutes, seconds];
}
​