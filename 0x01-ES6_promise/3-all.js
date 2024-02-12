<<<<<<< HEAD
/* eslint-disable*/
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
	return Promise.all([uploadPhoto(), createUser()])
	.then((result) => { 
		console.log(
        `${result[0].body} ${result[1].firstName} ${result[1].lastName}`,
		);
	})

    	.catch((error) => {
		console.log('Signup system offline');
	});
=======
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((value) => {
      console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
    })

    .catch(() => console.log('Signup system offline'));
>>>>>>> alx-frontend-javascript/main
}
