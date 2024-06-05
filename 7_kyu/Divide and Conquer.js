/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
*/
const divCon = x =>  x.reduce((a, b) => b === +b ? a + b : a - +b, 0)