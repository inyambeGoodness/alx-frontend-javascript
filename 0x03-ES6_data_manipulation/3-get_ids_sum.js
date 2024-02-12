<<<<<<< HEAD
export default function getStudentIdsSum(lst) {
  return lst.reduce((counter, currentObj) => counter + currentObj.id, 0);
}
=======
export default function getStudentIdsSum(students) {
    return students.reduce((acc, c) => acc + c.id, 0);
}
>>>>>>> alx-frontend-javascript/main
