import {
  createUserWithEmailAndPassword,
//   getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./config";
// import { openLoader, closeLoader } from "../../loader/loader";

// const auth = getAuth(app);

const signInUser = async ({ login, password }) => {
  try {
    await signInWithEmailAndPassword(auth, login, password);
    console.log("signed in");
    return auth.currentUser;
  } catch (err) {
    throw new Error(err.message);
  } 
};

const signOutUser = async () => {
  try {
    await signOut(auth);
    return auth.currentUser;
  } catch (err) {
    throw new Error(err.message);
  } 
};

const registerUser = async ({ login, password, displayName }) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, login, password);
    await updateProfile(res.user, {
      displayName,
    });
    return auth.currentUser;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const useUserAuth = () => {
  return {
    signInUser,
    signOutUser,
    registerUser,
    auth,
  };
};
