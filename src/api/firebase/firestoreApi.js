import {
  getDoc,
  setDoc,
  addDoc,
    collection,
    doc,
  Timestamp,
} from "firebase/firestore";

import { db } from "./config";
import { useSelector } from "react-redux";


// const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

const add = async (uid, post) => {

    try {
    await addDoc(collection(db, "posts"), {...post, uid})
  } catch (error) {
    throw new Error("DB Error");
  }
};

const getAll = async () => {

  try {
    const { books } = (await getDoc(doc(db, "carts", getUid()))).data();
    return books;
  } catch (error) {
    throw new Error("DB Error");
  } 
};

export const useFireStore = () => {
  return {
    add,
    getAll,
  };
};