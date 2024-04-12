// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd5iPK663DAm66xsF6ur_WVEFetsu6bCc",
  authDomain: "ekowarn.firebaseapp.com",
  projectId: "ekowarn",
  storageBucket: "ekowarn.appspot.com",
  messagingSenderId: "33328956329",
  appId: "1:33328956329:web:934f16edca23a91be57ab8",
  measurementId: "G-PKYKVN8JYR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
