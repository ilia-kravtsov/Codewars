const Not = A => A(False)(True)
​
const And = A => B => A(B)(False)
​
const Or = A => B => A(True)(B)
​
const Xor = A => B => A(Not(B))(B)
​