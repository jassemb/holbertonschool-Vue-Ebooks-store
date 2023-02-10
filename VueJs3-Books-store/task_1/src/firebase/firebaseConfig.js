import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBuXj7A8lo1EnRvD9C4RQiRpCS3hhnQI8c",
  authDomain: "vuejs3-books-store.firebaseapp.com",
  projectId: "vuejs3-books-store",
  storageBucket: "vuejs3-books-store.appspot.com",
  messagingSenderId: "29033930209",
  appId: "1:29033930209:web:1c2fd874f111e80107c6a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore();

//initialize firebase auth
const authDB = getAuth();
const projectStorage = getStorage();

export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export default { db, authDB, projectStorage };
