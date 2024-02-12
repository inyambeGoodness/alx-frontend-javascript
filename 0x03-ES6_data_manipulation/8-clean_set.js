export default function cleanSet(set, startString) {
<<<<<<< HEAD
  let text = '';
  const array = [];

  if (startString && typeof startString === 'string') {
    for (const element of set) {
      if (element && element.startsWith(startString)) {
        array.push(element.slice(startString.length));
      }
    }
    text = array.join('-');
  }
  return text;
}
=======
    const list = [];
    
    if (
        typeof set !== 'object'
        || typeof startString !== 'string'
        || startString.length === 0
        ) {
            return '';
        }
        
    for (const item of set) {
        if (item && item.startsWith(startString)) {
            list.push(item.slice(startString.length));
        }
    }
    return list.join('-');
}
>>>>>>> alx-frontend-javascript/main
