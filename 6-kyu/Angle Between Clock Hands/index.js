function handAngle(date) {
    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();

    const hourAngle = hours * 30 + minutes * 0.5;
    const minuteAngle = minutes * 6;

    const diff = Math.abs(hourAngle - minuteAngle);
    const angle = Math.min(diff, 360 - diff);

    return angle * Math.PI / 180;
}