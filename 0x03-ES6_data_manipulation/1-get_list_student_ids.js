export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const Ids = arr.map((StudentIds) => StudentIds.id);
  return Ids;
}
