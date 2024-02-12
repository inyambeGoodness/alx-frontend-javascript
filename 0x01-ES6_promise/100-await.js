import { uploadPhoto, createUser } from './utils';

<<<<<<< HEAD
export default async function asyncUploadUser() {
=======
const asyncUploadUser = async () => {
>>>>>>> alx-frontend-javascript/main
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

<<<<<<< HEAD
    return Promise.resolve({
      photo, user,
    });
  } catch (err) {
    return Promise.resolve({
      photo: null,
      user: null,
    });
  }
}
=======
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;
>>>>>>> alx-frontend-javascript/main
