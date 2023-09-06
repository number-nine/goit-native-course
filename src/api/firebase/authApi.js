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

const login = async ({ username, password }) => {
//   openLoader();

  try {
    await signInWithEmailAndPassword(auth, username, password);
    // localStorage.setItem("signeduser", auth.currentUser.uid);
    return auth.currentUser;
  } catch (err) {
    throw new Error(err.message);
  } finally {
    // closeLoader();
  }
};

const logout = async () => {
//   openLoader();
  try {
    await signOut(auth);
    // localStorage.removeItem("signeduser");
    return auth.currentUser;
  } catch (err) {
    throw new Error(err.message);
  } finally {
    // closeLoader();
  }
};

const register = async ({ email, password, displayName }) => {
//   openLoader();
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    // localStorage.setItem("signeduser", auth.currentUser.uid);
    await updateProfile(res.user, {
      displayName,
    });
    return auth.currentUser;
  } catch (err) {
    throw new Error(err.message);
  } finally {
    // closeLoader();
  }
};

export const useUserAuth = () => {
  return {
    login,
    logout,
    register,
    auth,
  };
};
