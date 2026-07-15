function fibonacci(max) {
    let sum = 0
    let a= 0
    let b = 1

    while (a < max) {
        if (a % 2 === 0) {
            sum += a
        }
        let next = a + b
        a = b
        b = next
    }
    return sum
}