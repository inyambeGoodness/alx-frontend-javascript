<<<<<<< HEAD
export default function hasValuesFromArray(set, arr) {
  return arr.reduce((prev, curr) => prev && set.has(curr), true);
}
=======
export default function hasValuesFromArray(set, array) {
    return array.every((value) => set.has(value));
}
>>>>>>> alx-frontend-javascript/main
