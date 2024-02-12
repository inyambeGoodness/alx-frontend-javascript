<<<<<<< HEAD
export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line
  for (const value of array) {
    // eslint-disable-next-line
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
=======
import appendToEachArrayValue from './10-loops.js';

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));
>>>>>>> alx-frontend-javascript/main
