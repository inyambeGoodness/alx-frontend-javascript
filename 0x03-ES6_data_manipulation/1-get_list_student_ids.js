<<<<<<< HEAD
export default function getListStudentIds(lst) {
  if (Array.isArray(lst)) {
    return lst.map((obj) => obj.id);
  }

  return [];
}
=======
export default function getListStudentIds(list) {
    if (Array.isArray(list)) {
        return list.map((obj) => obj.id);
    }
    return [];
}
>>>>>>> alx-frontend-javascript/main
