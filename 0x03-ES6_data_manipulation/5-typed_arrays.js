export default function createInt8TypedArray(length, position, value) {
<<<<<<< HEAD
  const buffer = new ArrayBuffer(length);
  const dv = new DataView(buffer);

  // check if position outside range
  if (position >= length) throw new Error('Position outside range');
  // set the new value in the desired position
  dv.setInt8(position, value);

  return dv;
}
=======
    const arr = new ArrayBuffer(length);
    const val = new DataView(arr);
    
    try {
        val.setInt8(position, value);
    } catch (e) {
        throw Error('Position outside range');
    }
    return val;
}
>>>>>>> alx-frontend-javascript/main
