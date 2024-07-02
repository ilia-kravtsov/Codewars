/*
Tale University is a bit messy, and can't maintain an ordered list of their student. Tale's dean wants to print a sortet list of his students by the gpa, last name and age and post it on the walls so everybody can be impressed of his great students.

Given a list of students, sort them by (from most important to least important):

GPA (descending)
First letter of last name (ascending)
Age (ascending)
And the class Student:

class Student {
  constructor(age, gpa, fullName) {
    this.age = age;
    this.gpa = gpa;
    this.fullName = fullName;
  };
};
Return the sorted result as full names string, comma separated.

For Example, given the list (name, age, gpa):

David Goodman, 23, 88
Mark Rose, 25, 82
Jane Doe, 22, 90
Jane Dane, 25, 90
sort(students) should return "Jane Doe,Jane Dane,David Goodman,Mark Rose"
*/

function sort(students) {
  function comparator(a, b) {
    if (a.gpa !== b.gpa) {
      return b.gpa - a.gpa;
    }

    const lastNameA = a.fullName.split(" ").slice(-1)[0];
    const lastNameB = b.fullName.split(" ").slice(-1)[0];
    if (lastNameA[0] !== lastNameB[0]) {
      return lastNameA[0].localeCompare(lastNameB[0]);
    }

    return a.age - b.age;
  }

  students.sort(comparator);

  return students.map((student) => student.fullName).join(",");
}
