<<<<<<< HEAD
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((std) => std.location === city).map((std) => ({ ...std, grade: newGrades.filter((g) => g.studentId === std.id).map((g) => g.grade)[0] || 'N/A' }));
}
=======
export default function updateStudentGradeByCity(listStudents, city, newGrades) {
    const students = listStudents.filter((student) => student.location === city);
    for (const student of students) {
        student.grade = 'N/A';
    }
    const newStudents = students.map((student) => {
        const single = student;
        for (const grade of newGrades) {
            if (single.id === grade.studentId) {
                single.grade = grade.grade;
            }
        }
        return single;
    });
    return newStudents;
}
>>>>>>> alx-frontend-javascript/main
