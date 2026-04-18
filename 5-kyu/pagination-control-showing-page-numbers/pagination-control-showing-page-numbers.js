const getPages = (length, currentPage, size) => {
  if (length <= 1) return [];
​
  const innerCount = size * 2 + 1;
  let start = currentPage - size;
  let end = currentPage + size;
​
  if (start < 2) {
    end += 2 - start;
    start = 2;
  }
​
  if (end > length - 1) {
    start -= end - (length - 1);
    end = length - 1;
  }
​
  start = Math.max(2, start);
  end = Math.min(length - 1, end);
​
  const pages = [1];
​
  for (let page = start; page <= end; page++) {
    pages.push(page);
  }
​
  if (length > 1) {
    pages.push(length);
  }
​
  return [...new Set(pages)];
};