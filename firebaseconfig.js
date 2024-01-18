// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPvMWTje869B8s2Y1FednSYTAV7CSY_n4",
  authDomain: "clone-cbcc9.firebaseapp.com",
  projectId: "clone-cbcc9",
  storageBucket: "clone-cbcc9.appspot.com",
  messagingSenderId: "816702111861",
  appId: "1:816702111861:web:904e7472795491ea31783c",
  measurementId: "G-D6BY16STK8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);