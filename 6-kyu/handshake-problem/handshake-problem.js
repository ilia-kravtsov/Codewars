function getParticipants(handshakes) {
  let n = 0;
  
  while (n * (n - 1) / 2 < handshakes) n++;
  
  return n;
}
​