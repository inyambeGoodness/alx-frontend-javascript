export default function signUpUser(firstName, lastName) {
<<<<<<< HEAD
  return new Promise((resolve) => {
    resolve({ firstName, lastName });
=======
  return Promise.resolve({
    firstName: `${firstName}`,
    lastName: `${lastName}`,
>>>>>>> alx-frontend-javascript/main
  });
}
