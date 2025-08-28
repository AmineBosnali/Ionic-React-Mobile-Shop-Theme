// authService.js
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase';

export const login = async (email:string, password:string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;
    const idToken = await user.getIdToken();
    return {
      email: user.email,
      uid: user.uid,
      idToken,
      refreshToken: user.refreshToken,
    };
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};
