export default function getResponseFromAPI() {
<<<<<<< HEAD
  return new Promise(() => {});
=======
  const success = true;
  return new Promise((resolve, reject) => {
    if (success) {
      resolve();
    } else {
      reject();
    }
  });
>>>>>>> alx-frontend-javascript/main
}
