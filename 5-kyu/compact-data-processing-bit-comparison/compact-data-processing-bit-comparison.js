function Network(count) {
  this.cameras = [];
  for (var i = 0; i < count; i++)
    this.cameras.push(new Camera(0, -30));
}
​
Network.prototype.process = function(byte) {
  var id = byte & 15;
​
  if (!this.cameras[id]) return;
​
  var v = 0;
  var h = 0;
​
  if (byte & 16) v += 5;
  if (byte & 32) v -= 5;
  if (byte & 64) h -= 5;
  if (byte & 128) h += 5;
​
  this.cameras[id].move(h, v);
};
​
function Camera(h, v) {
  this.horizontal = h;
  this.vertical = v;
}
​
Camera.prototype.move = function(h, v) {
  this.horizontal += h;
  this.vertical += v;
​
  this.horizontal = Math.max(-45, Math.min(45, this.horizontal));
  this.vertical = Math.max(-45, Math.min(45, this.vertical));
};