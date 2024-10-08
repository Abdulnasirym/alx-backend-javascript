export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const filtered = getListStudents.filter((student) => student.location === city);
  return filtered.map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });
}
