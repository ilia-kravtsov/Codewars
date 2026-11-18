var number = function(busStops){
  let total = 0;
  
  for (let [on, off] of busStops) {
    total += on - off;
  }
  
  return total;
}