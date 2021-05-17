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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
