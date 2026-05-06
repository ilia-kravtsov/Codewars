function multilevelsort(records, orders) {
  return records.sort((a, b) => {
    for (let order of orders) {
      const key = order.key;
      const dir = order.direction === "ascending" ? 1 : -1;
​
      if (a[key] > b[key]) return dir;
      if (a[key] < b[key]) return -dir;
    }
​
    return 0;
  });
}