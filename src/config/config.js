// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRumKPFESCMVUR3GE5jT5A5iiOfAW5LBM",
  authDomain: "todo-app-683e4.firebaseapp.com",
  projectId: "todo-app-683e4",
  storageBucket: "todo-app-683e4.appspot.com",
  messagingSenderId: "261662357392",
  appId: "1:261662357392:web:6f37f70c4ae8bd3603a515",
  measurementId: "G-Z5KSWPZHD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);