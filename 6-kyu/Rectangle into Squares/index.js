function sqInRect(lng, wdth) {
  if (lng === wdth) return null;

  const result = [];

  while (lng > 0 && wdth > 0) {
    const min = Math.min(lng, wdth);
    result.push(min);

    if (lng > wdth) {
      lng -= wdth;
    } else {
      wdth -= lng;
    }
  }

  return result;
}
