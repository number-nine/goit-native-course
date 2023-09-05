import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAP0qXeZhUiqQsV45RMiwtShjXgLo-7YsI",
  authDomain: "goit-native-course.firebaseapp.com",
  databaseURL: "https://goit-native-course.firebaseio.com",
  projectId: "goit-native-course",
  storageBucket: "goit-native-course.appspot.com",
    messagingSenderId: "405681544771",
    appId: "1:405681544771:web:240761a0a1d03472933ef6",
  //   measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
