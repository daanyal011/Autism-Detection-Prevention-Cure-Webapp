import firebase from 'firebase';
require("firebase/database");
require("firebase/auth");

const config = {
  apiKey: "AIzaSyABzvT_D_YqUo6UVIJ5T2y-upotDx0wW9Y",
  authDomain: "fun-games-c4f99.firebaseapp.com",
  projectId: "fun-games-c4f99",
  databaseURL: "https://fun-games-c4f99-default-rtdb.firebaseio.com",
  storageBucket: "fun-games-c4f99.appspot.com",
  messagingSenderId: "826397907777",
  appId: "1:826397907777:web:0041e89db1c4ea92ad5fc0",
  measurementId: "G-05QJP250TV"
};

const fire = firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();

export default fire;