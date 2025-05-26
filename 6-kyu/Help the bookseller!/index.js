function stockList(books, categories) {
  if (!books.length || !categories.length) return "";

  const result = {};
  for (let i = 0; i < categories.length; i++) {
    result[categories[i]] = 0;
  }

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const category = book[0];

    let j = 1;
    while (j < book.length && book[j] !== " ") j++;

    let quantity = 0;
    for (let k = j + 1; k < book.length; k++) {
      quantity = quantity * 10 + (book.charCodeAt(k) - 48);
    }

    if (result[category] !== undefined) {
      result[category] += quantity;
    }
  }

  const parts = [];
  for (let i = 0; i < categories.length; i++) {
    const cat = categories[i];
    parts.push("(" + cat + " : " + result[cat] + ")");
  }

  return parts.join(" - ");
}
