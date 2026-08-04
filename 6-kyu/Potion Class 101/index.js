class Potion {
  constructor(color, volume) {
    this.color = color;
    this.volume = volume;
  }

  mix(other) {
    const totalVolume = this.volume + other.volume;

    const newColor = this.color.map((value, index) =>
      Math.ceil(
        (value * this.volume + other.color[index] * other.volume) / totalVolume
      )
    );

    return new Potion(newColor, totalVolume);
  }
}