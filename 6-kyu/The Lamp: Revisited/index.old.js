class Lamp {
  constructor(color) {
    this.color = color;
    this.on = false;
  }
​
  toggleSwitch() {
    this.on = !this.on;
  }
​
  state() {
    return this.on ? "The lamp is on." : "The lamp is off.";
  }
}