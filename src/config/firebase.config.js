// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {FIREBASE_API_KEY, FIREBASE_APP_ID} from "../secret"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "heroes--journey.firebaseapp.com",
  projectId: "heroes--journey",
  storageBucket: "heroes--journey.appspot.com",
  messagingSenderId: "888639629578",
  appId: FIREBASE_APP_ID,
  measurementId: "G-0YNS5J9R9K"
};

// Initialize Firebase
initializeApp(firebaseConfig);