function mostMoney(students) {
  if (students.length === 1) return students[0].name;
​
  const totals = students.map(student => 
    student.fives * 5 + student.tens * 10 + student.twenties * 20
  );
​
  const max = Math.max(...totals);
  const allEqual = totals.every(total => total === totals[0]);
​
  if (allEqual) return "all";
​
  const maxIndex = totals.indexOf(max);
  return students[maxIndex].name;
}