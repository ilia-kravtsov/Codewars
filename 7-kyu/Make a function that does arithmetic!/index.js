function arithmetic(a, b, operator){
    const arithmeticOperations = {
        "add": a + b,
        "subtract": a - b,
        "multiply": a * b,
        "divide": a / b
    }
​
    return arithmeticOperations[operator]
}