<<<<<<< HEAD
/* eslint-disable */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({
        status: 200,
        body: "Success",
      });
    } else {
      reject(new Error("The fake API is not working currently"));
=======
export default function (boolean) {
  return new Promise((resolve, reject) => {
    const object = {
      status: 200,
      body: 'Success',
    };

    if (boolean === true) {
      resolve(object);
    } else {
      reject(Error('The fake API is not working currently'));
>>>>>>> alx-frontend-javascript/main
    }
  });
}
