function search(searchTerm) {
  return TITLES.filter(function(title) {
    return title.toLowerCase().includes(searchTerm.toLowerCase());
  });
}