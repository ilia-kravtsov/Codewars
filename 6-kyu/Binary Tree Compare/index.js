function compare(a, b) {
  if (!a && !b) {
    return true;
  }
  
  if (!a || !b) {
    return false;
  }
  
  return a.val === b.val && 
         compare(a.left, b.left) && 
         compare(a.right, b.right);
}