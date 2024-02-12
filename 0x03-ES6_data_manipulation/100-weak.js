export const weakMap = new WeakMap();
<<<<<<< HEAD
let count = 1;

export function queryAPI(endPoint) {
  weakMap.set(endPoint, count);
  count += 1;
  const queryCount = weakMap.get(endPoint);
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
=======
export function queryAPI(endpoint) {
    let count = weakMap.get(endpoint) || 0;
    count += 1;
    
    if (count >= 5) {
        throw new Error('Endpoint load is high');
    } else {
        weakMap.set(endpoint, count);
    }
}
>>>>>>> alx-frontend-javascript/main
