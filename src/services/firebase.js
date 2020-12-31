import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyCKYtxm_HrFULzxXZ2V14f3kwlAu6OGNkg",
  authDomain: "fir-2-6897a.firebaseapp.com",
  databaseURL: "https://fir-2-6897a-default-rtdb.firebaseio.com/"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();