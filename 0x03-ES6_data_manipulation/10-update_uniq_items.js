export default function updateUniqueItems(map) {
<<<<<<< HEAD
  if (map instanceof Map) {
    for (const [key, value] of map) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return map;
}
=======
    const list = map;
    
    if (list instanceof Map) {
        for (const [key, value] of list) {
            if (value === 1) {
                list.set(key, 100);
            }
        }
    } else {
        throw new Error('Cannot process');
    }
    return list;
}
>>>>>>> alx-frontend-javascript/main
