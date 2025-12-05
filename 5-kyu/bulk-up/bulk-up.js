function bulk(arr) {
  let proteins = 0, carbs = 0, fats = 0;
​
  for (const meal of arr) {
    const items = meal.split(',');
    for (let item of items) {
      item = item.trim();
      const match = item.match(/(\d+)g\s+(\w+)/);
      if (!match) continue;
      const grams = Number(match[1]);
      const name = match[2];
      const info = food[name];
      if (!info) continue;
      const factor = grams / 100;
      proteins += info[0] * factor;
      carbs += info[1] * factor;
      fats += info[2] * factor;
    }
  }
​
  const totalProteins = proteins;
  const totalCalories = proteins * 4 + carbs * 4 + fats * 9;
​
  const fmt = n => {
    let s = n.toFixed(2);
    s = s.replace(/0+$/, '').replace(/\.$/, '');
    return s;
  };
​
  return `Total proteins: ${fmt(totalProteins)} grams, Total calories: ${fmt(totalCalories)}`;
}
​