export default function getListStudentIds(studentsList) {
  if (Array.isArray(studentsList)) return studentsList.map((s) => s.id);
  return [];
}
