import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwqS2a3cCqJe9DOS_pH4vBdVN4cQNv-ZQ",
  authDomain: "revents-f29e0.firebaseapp.com",
  databaseURL: "https://revents-f29e0.firebaseio.com",
  projectId: "revents-f29e0",
  storageBucket: "",
  messagingSenderId: "649441962134"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;
