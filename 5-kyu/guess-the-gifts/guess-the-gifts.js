function guessGifts(wishlist, presents) {
  let result = [];
  
  for (let present of presents) {
    for (let item of wishlist) {
      if (
        item.size === present.size &&
        item.clatters === present.clatters &&
        item.weight === present.weight
      ) {
        if (!result.includes(item.name)) {
          result.push(item.name);
        }
      }
    }
  }
  
  return result;
}