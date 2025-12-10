function getAge(birthDate, nowDate = new Date()) {
  let age = nowDate.getFullYear() - birthDate.getFullYear();
​
  const thisYearBirthday = new Date(nowDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
​
  if (nowDate < thisYearBirthday) {
    age--;
  }
​
  return age;
}
​