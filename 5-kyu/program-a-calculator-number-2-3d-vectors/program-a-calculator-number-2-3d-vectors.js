  dot(v) {
    return this.i * v.i + this.j * v.j + this.k * v.k;
  }
​
  cross(v) {
    return new Vector(
      this.j * v.k - this.k * v.j,
      this.k * v.i - this.i * v.k,
      this.i * v.j - this.j * v.i
    );
  }
​
  isParallelTo(v) {
    const eps = 1e-10;
​
    const magA = this.getMagnitude();
    const magB = v.getMagnitude();
    if (magA <= eps || magB <= eps) return false;
​
    const c = this.cross(v).getMagnitude();
    return c <= eps * magA * magB;
  }
​
  isPerpendicularTo(v) {
    const eps = 1e-10;
​
    const magA = this.getMagnitude();
    const magB = v.getMagnitude();
    if (magA <= eps || magB <= eps) return false;
​
    return Math.abs(this.dot(v)) <= eps * magA * magB;
  }
​
  normalize() {
    const mag = this.getMagnitude();
    if (mag === 0) return new Vector(0, 0, 0);
    return this.multiplyByScalar(1 / mag);
  }
​
  isNormalized() {
    const eps = 1e-10;
    return Math.abs(this.getMagnitude() - 1) <= eps;
  }
}
​
​