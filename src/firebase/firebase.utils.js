import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCquhov2YSjuN3L72YDb-yhew7jD9i1x7U",
  authDomain: "saha-comerce-store.firebaseapp.com",
  projectId: "saha-comerce-store",
  storageBucket: "saha-comerce-store.appspot.com",
  messagingSenderId: "394890209162",
  appId: "1:394890209162:web:72e31a24a2fc3d2e9f4a73",
  measurementId: "G-X3Y0HMJN10",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
