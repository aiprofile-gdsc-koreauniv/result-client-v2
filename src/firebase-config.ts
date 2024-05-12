import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDLcgA1o5gWqY6lX0oI3hNUVSh_r3Izl3Y",
  authDomain: "ai-profile-394809.firebaseapp.com",
  projectId: "ai-profile-394809",
  storageBucket: "ai-profile-394809.appspot.com",
  messagingSenderId: "1067678761355",
  appId: "1:1067678761355:web:c3c810e5b8c6ca7ba82f8e",
  measurementId: "G-9DYVFP1S8E",
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

export const signOut = () => {
  return auth.signOut();
};
