function isTriangleNumber(n) {
    if (n < 0) return false;
    const discriminant = 1 + 8 * n;
    const sqrtDiscriminant = Math.sqrt(discriminant);
    return Number.isInteger(sqrtDiscriminant) && Number.isInteger((-1 + sqrtDiscriminant) / 2);
}