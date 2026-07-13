function divisibleCount(x, y, k) {
    let first = x + (k - x % k) % k;  
    let last = y - (y % k);            
    if (first > last) return 0;
    return (last - first) / k + 1;
}