// You only need one - Beginner

function check(a, x) {
  return a.includes(x);
};

function bonusTime(salary, bonus) {
  if(bonus === true){
    return '£' + salary * 10;
    } else {
    return '£' + salary;
  }
}

function stringToArray(string){
  return string.split(' ');
}

function contamination(text, char){
  return char.repeat(text.length)
}

function booleanToString(b){
  return b ? "true" : "false";
}

function repeatStr (n, s) {
  return s.repeat(n);
}