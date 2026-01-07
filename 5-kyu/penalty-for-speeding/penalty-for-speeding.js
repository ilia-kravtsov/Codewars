function penalty(a_list) {
  return a_list
    .map(String)
    .sort((a, b) => (a + b).localeCompare(b + a))
    .join('');
}
​