function add(x,y){
  var carry;
  
  while(y!==0) {
    carry = x & y;
    x = x ^ y;
    y = carry << 1;
  }
  
  return x;
}