// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: "realestate-7aee5.firebaseapp.com",
  projectId: "realestate-7aee5",
  storageBucket: "realestate-7aee5.appspot.com",
  messagingSenderId: "614725942344",
  appId: "1:614725942344:web:054ab3b83e3484372a6c7d",
  measurementId: "G-9LZ6JZM5SC",
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
