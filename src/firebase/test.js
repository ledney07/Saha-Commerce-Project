import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("Fu70TZ8256RtzsaT2rt6")
  .collection("cartItems")
  .doc("97kpZIsJlMA3VLW9tM6r");

firestore.doc("/users/Fu70TZ8256RtzsaT2rt6/cartItems/97kpZIsJlMA3VLW9tM6r");
firestore.collection("/users/Fu70TZ8256RtzsaT2rt6/cartItems/");
