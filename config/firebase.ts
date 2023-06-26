// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWvn_ngiw9OnY0_s0Ree6_TlQlo1ZI-bg",
  authDomain: "money-manager-cadb1.firebaseapp.com",
  projectId: "money-manager-cadb1",
  storageBucket: "money-manager-cadb1.appspot.com",
  messagingSenderId: "9220645768",
  appId: "1:9220645768:web:7e478b75a5eb529f76103d",
  measurementId: "G-BS3MTWRT69",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
