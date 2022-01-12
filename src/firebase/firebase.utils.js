import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCZ-s7Yr2HzHInOenvUv_3V-HDiWtr4w3A",
  authDomain: "crwn-db-2022.firebaseapp.com",
  projectId: "crwn-db-2022",
  storageBucket: "crwn-db-2022.appspot.com",
  messagingSenderId: "187166467323",
  appId: "1:187166467323:web:d762961e589511d6b77c5e",
  measurementId: "G-CPXHFMDJQH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
