import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    return {
      photo: await createUser(),
      user: await uploadPhoto(),
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
