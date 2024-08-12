// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNOZz70T5hWcpN5R3-vwgwo9wL6gOLimo",
  authDomain: "inventory-management-13b14.firebaseapp.com",
  projectId: "inventory-management-13b14",
  storageBucket: "inventory-management-13b14.appspot.com",
  messagingSenderId: "588364218195",
  appId: "1:588364218195:web:c69aea5492fa782c02eba6",
  measurementId: "G-52PB8X2HXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}